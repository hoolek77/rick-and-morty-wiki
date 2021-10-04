import { useState } from 'react';

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
  const [nextPage, setNextPage] = useState<number | null>(2);
  const { data, loading, error, fetchMore } = useQuery<AllCharacters, AllCharactersVariables>(CHARACTERS_QUERY, {
    variables: {
      page: 1,
    },
  });

  const loadMoreCharacters = () => {
    if (!nextPage) return;

    fetchMore({
      variables: { page: nextPage },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newInfo = fetchMoreResult?.characters.info || { next: null };
        const newResult = fetchMoreResult?.characters.results || [];

        setNextPage(newInfo.next);

        return {
          characters: {
            results: [...previousResult.characters.results, ...newResult],
            info: {
              __typename: 'Info',
              next: newInfo.next,
            },
          },
        };
      },
    });
  };

  return {
    data: data?.characters?.results || [],
    loading,
    error,
    loadMoreCharacters,
    isNextPage: !!nextPage,
  };
};
