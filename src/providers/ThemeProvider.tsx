import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

import { ThemeType } from 'models';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'styles';

type ThemeContextType = {
  theme: string;
  setThemeState: Dispatch<SetStateAction<ThemeType>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setThemeState: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<ThemeType>('dark');

  return (
    <ThemeContext.Provider value={{ theme: themeState, setThemeState }}>
      <StyledThemeProvider theme={theme[themeState]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
