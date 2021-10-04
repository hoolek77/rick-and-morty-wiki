import { useQuery } from '@apollo/client';

import { AllCharacters_characters_info, AllCharactersVariables } from './__generated__/AllCharacters';
import { CHARACTERS_QUERY } from './query';

export type CharactersResult = {
  id: string;
  name: string;
  species: string;
  image: string;
};

type Characters = {
  results: CharactersResult[];
  info: AllCharacters_characters_info;
};

type AllCharacters = {
  characters: Characters;
};

export const useCharacters = () => {
  const { data, loading, error, fetchMore } = useQuery<AllCharacters, AllCharactersVariables>(CHARACTERS_QUERY, {
    variables: {
      page: 1,
    },
  });

  const next = data?.characters.info.next;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: { page: next },
    });
  };

  return {
    data: data?.characters?.results || [],
    loading,
    error,
    loadMoreCharacters,
    isNextPage: !!next,
  };
};
