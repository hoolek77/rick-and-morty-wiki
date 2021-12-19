import { useQuery } from '@apollo/client';

import { EPISODES_DETAILS_QUERY } from './query';

interface EpisodeDetailsEpisodeCharacters {
  __typename: 'Character';
  id: string;
  name: string;
  species: string;
  image: string;
}

interface EpisodeDetailsEpisode {
  __typename: 'Episode';
  id: string;
  name: string;
  episode: string;
  air_date: string;
  characters: EpisodeDetailsEpisodeCharacters[];
}

interface EpisodeDetails {
  episode: EpisodeDetailsEpisode;
}

interface EpisodeDetailsVariables {
  id: string;
}

export const useEpisodeDetails = (variables: EpisodeDetailsVariables) => {
  const { data, loading, error } = useQuery<EpisodeDetails, EpisodeDetailsVariables>(EPISODES_DETAILS_QUERY, {
    variables,
  });

  return {
    data,
    loading,
    error,
  };
};
