import React, { useEffect } from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { CharactersList } from 'components/CharactersList';
import { InputsWrapper } from 'components/InputsWrapper';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { SearchInput } from 'components/SearchInput';
import { SelectInput } from 'components/SelectInput';
import { GENDER, SPECIES, STATUS } from 'constants/charactersOptions';
import { useCharacters } from 'hooks/useCharacters';
import { useQueryLoadingStatus } from 'hooks/useQueryLoadingStatus';
import { useSearchForm } from 'hooks/useSearchForm';

type SearchParams = {
  name: string;
  species: string;
  gender: string;
  status: string;
};

export const Characters = () => {
  const { formState: searchParams, handleChange } = useSearchForm<SearchParams>({
    name: '',
    species: '',
    gender: '',
    status: '',
  });
  const { data, loadMoreCharacters, isNextPage, refetch, networkStatus, error } = useCharacters();
  const { isFetchMoreLoading, isInitialOrRefetchLoading } = useQueryLoadingStatus(networkStatus);

  useEffect(() => {
    // TODO: add debounce for name changes
    refetch({ filter: searchParams });
  }, [searchParams, refetch]);

  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />
      <InputsWrapper>
        <SearchInput placeholder="Filter by name..." onChange={(e) => handleChange(e, 'name')} />
        <SelectInput placeholder="Species" options={SPECIES} onChange={(e) => handleChange(e, 'species')} />
        <SelectInput placeholder="Gender" options={GENDER} onChange={(e) => handleChange(e, 'gender')} />
        <SelectInput placeholder="Status" options={STATUS} onChange={(e) => handleChange(e, 'status')} />
      </InputsWrapper>
      <CharactersList characters={data} loading={isInitialOrRefetchLoading} error={error} />
      {isNextPage && !error && !isInitialOrRefetchLoading && (
        <LoadMoreButton onClick={loadMoreCharacters} loading={isFetchMoreLoading} disabled={isFetchMoreLoading} />
      )}
    </ScreenWrapper>
  );
};
