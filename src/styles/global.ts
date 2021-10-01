import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.fontPrimary};
  }

  html {
    font-family: "Asap", sans-serif;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.primary};
  }
`;
