import { useQuery } from '@apollo/client';

import { AllEpisodesVariables } from './__generated__/AllEpisodes';
import { EPISODES_QUERY } from './query';

export interface AllEpisodesEpisodesResults {
  __typename: 'Episode';
  id: string;
  name: string;
  airDate: string;
  episode: string;
}

export interface AllEpisodesEpisodesInfo {
  __typename: 'Info';
  next: number;
}

export interface AllEpisodesEpisodes {
  __typename: 'Episodes';
  results: AllEpisodesEpisodesResults[];
  info: AllEpisodesEpisodesInfo;
}

export interface AllEpisodes {
  episodes: AllEpisodesEpisodes;
}

export const useEpisodes = () => {
  const { data, error, fetchMore, refetch, networkStatus } = useQuery<AllEpisodes, AllEpisodesVariables>(
    EPISODES_QUERY,
    {
      variables: {
        page: 1,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  const next = data?.episodes?.info?.next;

  const loadMoreEpisodes = () => {
    fetchMore({
      variables: { page: next },
    });
  };

  return {
    data: data?.episodes?.results || [],
    error,
    loadMoreEpisodes,
    isNextPage: !!next,
    refetch,
    networkStatus,
  };
};
