import React from 'react';

import { gql, useQuery } from '@apollo/client';

import { CharactersQuery, CharactersQueryVariables } from './__generated__/CharactersQuery';

const CHARACTERS_QUERY = gql`
  query CharactersQuery($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
      }
    }
  }
`;

export const Test = () => {
  const { data, loading, error } = useQuery<CharactersQuery, CharactersQueryVariables>(CHARACTERS_QUERY, {
    variables: { page: 10 },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{JSON.stringify(data?.characters?.results)}</div>;
};
