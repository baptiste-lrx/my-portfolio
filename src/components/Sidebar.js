// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

// Importation de l'image du projet
import projetImage from '../assets/images/test2.png'; // Remplacez par le chemin réel de votre image
import projetImage2 from '../assets/images/test3.png'; // Remplacez par le chemin réel de votre image

function Sidebar() {
    const theme = useTheme();
  
    return (
      <Box
        sx={{
          padding: '1rem',
          backgroundColor: theme.palette.background.paper,
          position: 'relative',
          top: '0',
        }}
      >

        {/* Section Mémoire de fin d'étude */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
          </Typography>
          <img
            src={projetImage}
            alt="Présentation du projet"
            style={{ width: '100%', marginBottom: '1rem' }}
          />

          <Typography
            variant="body2"
            sx={{
              marginBottom: '1rem',
              textAlign: 'justify', // Ajout de l'alignement justifié
            }}
          > En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus

          </Typography>
        </Box>
  
        <Divider />
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
          </Typography>
          <img
            src={projetImage2}
            alt="Présentation du projet"
            style={{ width: '100%', marginBottom: '1rem' }}
          />

          <Typography
            variant="body2"
            sx={{
              marginBottom: '1rem',
              textAlign: 'justify', // Ajout de l'alignement justifié
            }}
          > En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus
            En savoir plus

          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`${process.env.PUBLIC_URL}/documents/memoire.pdf`}
            target="_blank"
            rel="noopener"
            sx={{ mt: 2 }}
            startIcon={<DownloadIcon />}
          >
            En savoir plus
          </Button>
        </Box>
  
        <Divider />
        {/* Autres articles */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Articles
          </Typography>
          {/* Votre code pour afficher les articles */}
        </Box>
      </Box>
    );
  }
  
  export default Sidebar;