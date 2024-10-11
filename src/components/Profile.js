// src/components/Profile.js
import React from 'react';
import { Typography, Avatar, Grid, useTheme } from '@mui/material';
import Section from './Section';

function Profile() {
  const theme = useTheme();

  return (
    <Section
      id="profile"
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        padding: '4rem 0',
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Avatar
            alt="Votre Nom"
            src="lien-vers-votre-photo.jpg"
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom style={{ color: '#ffffff' }}>
            Votre Nom
          </Typography>
          <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
            Ingénieur en systèmes embarqués
          </Typography>
          <Typography variant="body1" style={{ marginTop: '1rem', color: '#ffffff' }}>
            [Brève description de vous-même.]
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Profile;
