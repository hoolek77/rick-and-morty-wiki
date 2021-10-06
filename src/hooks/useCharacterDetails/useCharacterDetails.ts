import { useQuery } from '@apollo/client';

import { CharacterDetailsVariables } from './__generated__/CharacterDetails';
import { CHARACTER_DETAILS_QUERY } from './query';

type CharacterOrigin = {
  __typename: 'Location';
  id: string;
  name: string;
};

type CharacterLocation = {
  __typename: 'Location';
  id: string;
  name: string;
};

type CharacterEpisode = {
  __typename: 'Episode';
  id: string;
  name: string;
  air_date: string;
  episode: string;
};

type Character = {
  __typename: 'Character';
  id: string;
  gender: string;
  status: string;
  species: string;
  origin: CharacterOrigin;
  type: string | null;
  location: CharacterLocation;
  episode: CharacterEpisode[];
  image: string;
  name: string;
};

type CharacterDetails = {
  character: Character | null;
};

export const useCharacterDetails = (variables: CharacterDetailsVariables) => {
  const { data, loading, error } = useQuery<CharacterDetails, CharacterDetailsVariables>(CHARACTER_DETAILS_QUERY, {
    variables,
  });

  return {
    data,
    loading,
    error,
  };
};
