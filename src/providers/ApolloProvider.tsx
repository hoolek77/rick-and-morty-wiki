import React, { FC } from 'react';

import { ApolloClient, ApolloProvider as Provider } from '@apollo/client';
import { cache } from 'constants/cache';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
});

export const ApolloProvider: FC = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
