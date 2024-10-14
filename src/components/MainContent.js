// src/components/MainContent.js
import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import backgroundImage from '../assets/images/wickedbackground.svg'; 

function MainContent({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: { xs: '2rem', md: '4rem' },
        paddingBottom: { xs: '2rem', md: '4rem' },
        backgroundColor: theme.palette.background.default, // Fallback couleur
      }}
    >
      {children}
    </Box>
  );
}

export default MainContent;
