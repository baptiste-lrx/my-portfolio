// src/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
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
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
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
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
  },
});
