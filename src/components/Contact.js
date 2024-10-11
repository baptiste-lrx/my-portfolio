// src/components/Contact.js
import React from 'react';
import { Typography, TextField, Button, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import Section from './Section';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const fieldVariants = {
    focus: { scale: 1.02, borderColor: '#0D47A1' },
  };

  return (
    <Section id="contact">
      <Typography variant="h4" gutterBottom align="center">
        Contact
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        N'hésitez pas à me contacter pour plus d'informations.
      </Typography>
      {/* ...le reste du code est inchangé... */}
    </Section>
  );
}

export default Contact;
