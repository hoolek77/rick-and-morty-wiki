import React, { FC } from 'react';

import { ApolloProvider } from './ApolloProvider';

export const RootProvider: FC = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
