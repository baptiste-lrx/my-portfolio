// src/theme.js
import { createTheme } from '@mui/material/styles';

const commonThemeSettings = {
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.5s ease, color 0.5s ease',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#0b3041', // Bleu foncé
    },
    secondary: {
      main: '#3a5865', // Bleu moyen
    },
    background: {
      default: '#ffffff', // Blanc
    },
    text: {
      primary: '#343434', // Gris foncé
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3a5865', // Bleu moyen
    },
    secondary: {
      main: '#0b3041', // Bleu foncé
    },
    background: {
      default: '#343434', // Gris foncé
    },
    text: {
      primary: '#ffffff', // Blanc
    },
  },
});
