import React, { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { ApolloProvider } from './ApolloProvider';
import { ThemeProvider } from './ThemeProvider';

export const RootProvider: FC = ({ children }) => {
  return (
    <ChakraProvider>
      <ApolloProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
};
