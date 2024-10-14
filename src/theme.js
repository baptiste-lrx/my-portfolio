// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#183444', // Bleu foncé
      contrastText: '#ffffff', // Blanc
    },
    secondary: {
      main: '#ffffff', // Blanc
      contrastText: '#183444', // Bleu foncé
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      blue: '#103444', // Bleu personnalisé pour les sections
    },
    text: {
      primary: '#183444', // Bleu foncé
      secondary: '#757575', // Gris foncé
      contrastText: '#ffffff', // Blanc pour les textes sur fond bleu
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.5s ease, color 0.5s ease',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&:hover': {
            color: '#b0bec5',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#183444',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#142a36',
          },
        },
        containedSecondary: {
          backgroundColor: '#ffffff',
          color: '#183444',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
  },
});

export default theme;
