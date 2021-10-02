import { useQuery } from '@apollo/client';

import { AllCharacters, AllCharactersVariables } from './__generated__/AllCharacters';
import { CHARACTERS_QUERY } from './query';

export const useCharacters = () => {
  const { data, loading, error } = useQuery<AllCharacters, AllCharactersVariables>(CHARACTERS_QUERY, {
    variables: {
      page: 1,
    },
  });

  return {
    data: data?.characters?.results,
    loading,
    error,
  };
};
