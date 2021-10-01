import React from 'react';

import { gql, useQuery } from '@apollo/client';

const CHARACTERS_QUERY = gql`
  query CharactersQuery($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

export const App = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
