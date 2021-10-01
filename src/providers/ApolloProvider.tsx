import React, { FC } from 'react';

import { ApolloClient, ApolloProvider as Provider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const ApolloProvider: FC = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
