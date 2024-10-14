// src/components/Footer.js
import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
        padding: '1rem 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Baptiste Le Roux. Tous droits réservés.
      </Typography>
      <Typography variant="body2">
        <Link href="mailto:votre.email@example.com" color="secondary" underline="hover">
        Copyright © 2024 Baptiste LE ROUX
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
