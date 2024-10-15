// src/components/Contact.js
import React, {  } from 'react';
import { Typography, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Section from './Section';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const theme = useTheme();
  return (
    <Section
      id="contact"
      sx={{
        color: theme.palette.secondary.contrastText, // Texte blanc sur fond bleu
        padding: '6rem 2rem',
      }}
    >
      {/* Titre de la section */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Contact
      </Typography>

      {/* Description de la section */}
      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: 'center', color: theme.palette.secondary.contrastText }}
      >
        N'hésitez pas à me contacter pour plus d'informations ou pour discuter de projets potentiels.
      </Typography>

      {/* Liens vers les réseaux sociaux */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: theme.palette.secondary.contrastText }}
        >
          Retrouvez-moi sur
        </Typography>
        <Box>
          <Link href="mailto:bapt.leroux29@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
            <EmailIcon fontSize="large" color="primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/baptiste-le-roux" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
            <LinkedInIcon fontSize="large" color="primary" />
          </Link>
          <Link href="https://github.com/baptiste-lrx" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
            <GitHubIcon fontSize="large" color="primary" />
          </Link>
        </Box>
      </Box>
    </Section>
  );
}

export default React.memo(Contact);
