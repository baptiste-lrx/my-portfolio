// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif', 
    h4: {
      fontWeight: 700,
      fontSize: '2.5rem', // Ajustez la taille selon vos préférences
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
  },
});

export default theme;
