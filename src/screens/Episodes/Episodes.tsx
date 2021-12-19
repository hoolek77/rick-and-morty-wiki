import React, { useEffect } from 'react';

import episodesLogo from 'assets/episodesLogo.png';
import { EpisodesList } from 'components/EpisodesList';
import { InputsWrapper } from 'components/InputsWrapper';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchInput } from 'components/SearchInput';
import { useEpisodes } from 'hooks/useEpisodes';
import { useQueryLoadingStatus } from 'hooks/useQueryLoadingStatus';
import { useSearchForm } from 'hooks/useSearchForm';

type SearchParams = {
  name: string;
};

export const Episodes = () => {
  const { formState: searchParams, handleChange } = useSearchForm<SearchParams>({
    name: '',
  });
  const { data, refetch, error, isNextPage, loadMoreEpisodes, networkStatus } = useEpisodes();
  const { isFetchMoreLoading, isInitialOrRefetchLoading } = useQueryLoadingStatus(networkStatus);

  useEffect(() => {
    refetch({ filter: searchParams });
  }, [searchParams, refetch]);

  return (
    <ScreenWrapper>
      <ScreenImage src={episodesLogo} alt="characters" />
      <InputsWrapper>
        <SearchInput
          placeholder="Filter by name or episode (ex. S01 or S01E02)"
          onChange={(e) => handleChange(e, 'name')}
          style={{ width: '50%' }}
        />
      </InputsWrapper>
      <EpisodesList episodes={data} loading={isInitialOrRefetchLoading} error={error} />
      {isNextPage && !error && !isInitialOrRefetchLoading && (
        <LoadMoreButton onClick={loadMoreEpisodes} loading={isFetchMoreLoading} disabled={isFetchMoreLoading} />
      )}
    </ScreenWrapper>
  );
};
