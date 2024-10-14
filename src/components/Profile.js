// src/components/Profile.js
import React from 'react';
import { Typography, Avatar, Grid, useTheme, Box } from '@mui/material';
import Section from './Section';

// Importation de l'image de fond (assurez-vous que le chemin est correct)
import backgroundImage from '../assets/images/shley-tree-1-1920x1080.png'; // Remplacez par le chemin réel
// Importation de votre photo de profil
import profileImage from '../assets/profil/profil.jpeg'; // Remplacez par le chemin réel

function Profile() {
  const theme = useTheme();

  const textColor = theme.palette.getContrastText(theme.palette.primary.main);

  return (
    <Section
      id="profile"
      noMarginTop
      sx={{
        backgroundColor: '#103444',
        //backgroundImage: `url(${backgroundImage})`,
        //backgroundSize: 'cover',
        //backgroundPosition: 'center',
        //backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '6rem 0',
        color: textColor,
      }}
    >
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item>
          <Avatar
            alt="Votre Nom"
            src={profileImage}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
            }}
          >
            Baptiste Le Roux
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
            }}
          >
            Ingénieur en systèmes embarqués
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: '2rem',
              textAlign: 'center',
            }}
          >
            [Brève description de vous-même.]
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontStyle: 'italic',
                textAlign: 'center',
              }}
            >
              "Le vent se lève, il faut tenter de vivre."
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'center',
              }}
            >
              - Paul Valéry (popularisé par le film de Hayao Miyazaki)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Profile;
