// src/components/Footer.js
import React from 'react';
import { Typography, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#183444',
        color: '#fff',
        padding: '1rem 0', // Réduit le padding vertical
        textAlign: 'center',
        marginTop: '0', // Assure qu'il n'y a pas de marge supérieure
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Baptiste Le Roux. Tous droits réservés.
      </Typography>
      <Typography variant="body2">
        <Link href="mailto:votre.email@example.com" color="#183444" underline="hover">
          votre.email@example.com
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
