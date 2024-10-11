// src/components/Footer.js
import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer style={{ padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <IconButton href="https://github.com/votre-utilisateur" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/votre-profil" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Votre Nom
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
