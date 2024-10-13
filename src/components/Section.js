// src/components/Section.js
import React from 'react';
import { Box } from '@mui/material';

// Importation de l'image de fond SVG

function Section({ id, children, noMarginTop, sx = {}, disableDefaultBackground = false }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        paddingTop: noMarginTop ? 0 : '4rem',
        paddingBottom: '4rem',
        
        position: 'relative',
        ...sx, // Permet de surcharger ou d'ajouter des styles
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
