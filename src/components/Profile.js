// src/components/Profile.js
import React from 'react';
import { Typography, Avatar, Grid, useTheme, Box } from '@mui/material';
import Section from './Section';

function Profile() {
  const theme = useTheme();

  // Déterminer la couleur de fond en fonction du mode
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.primary.main // Couleur bleue en mode clair
      : theme.palette.background.paper; // Utilise #282424 en mode sombre

  const textColor = theme.palette.getContrastText(backgroundColor);

  return (
    <Section
      id="profile"
      noMarginTop
      style={{
        backgroundColor: backgroundColor,
        padding: '6rem 0',
      }}
    >
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item>
          <Avatar
            alt="Votre Nom"
            src="lien-vers-votre-photo.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: textColor,
              textAlign: 'center',
            }}
          >
            Baptiste Le Roux
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: textColor,
              textAlign: 'center',
            }}
          >
            Ingénieur en systèmes embarqués
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: '2rem',
              color: textColor,
              textAlign: 'center',
            }}
          >
            Nouvellement diplômé avec trois ans d'expérience en apprentissage où j'ai acquis de solides compétences en programmation et en electronique.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: textColor,
                fontStyle: 'italic',
                textAlign: 'center',
              }}
            >
              "Le vent se lève, il faut tenter de vivre."
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: textColor,
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
