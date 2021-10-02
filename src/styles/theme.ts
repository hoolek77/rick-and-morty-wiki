const fonts = {
  primary: 'Robot, sans-serif',
  secondary: 'Karla, sans-serif',
};

export const theme = {
  light: {
    primary: '#FFFFFF',
    secondary: '#E5E5E5',
    hamburgerMenuIcon: 'rgba(0,0,0, .54)',
    hoverPrimary: '#97CE4C',
    fontPrimary: '#000000',
    fontSecondary: 'rgba(0, 0, 0, 0.6)',
    fonts,
  },
  dark: {
    primary: '#FFFFFF',
    secondary: '#E5E5E5',
    hamburgerMenuIcon: 'rgba(0,0,0, .54)',
    hoverPrimary: '#97CE4C',
    fontPrimary: '#000000',
    fontSecondary: 'rgba(0, 0, 0, 0.6)',
    fonts,
  },
};

export type Theme = typeof theme.light;
