// src/components/MainContent.js
import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Importez votre image de fond unique
import backgroundImage from '../assets/images/wickedbackground.svg'; // Remplacez par le chemin réel

function MainContent({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // S'assure que le fond couvre toute la hauteur
        paddingTop: '4rem', // Ajustez selon vos besoins
        paddingBottom: '4rem', // Ajustez selon vos besoins
      }}
    >
      {children}
    </Box>
  );
}

export default MainContent;
