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
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '1rem' }}>
        N'hésitez pas à me contacter pour plus d'informations.
      </Typography>
      <form
        action="https://formspree.io/f/{votre-form-id}"
        method="POST"
        style={{ marginBottom: '2rem' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <motion.div whileFocus="focus" variants={fieldVariants}>
              <TextField label="Nom" name="name" fullWidth required />
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div whileFocus="focus" variants={fieldVariants}>
              <TextField label="Email" name="email" type="email" fullWidth required />
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div whileFocus="focus" variants={fieldVariants}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
              />
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link href="mailto:votre-email@example.com" color="inherit">
            <Button startIcon={<EmailIcon />} color="primary">
              votre-email@example.com
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/votre-profil" target="_blank" color="inherit">
            <Button startIcon={<LinkedInIcon />} color="primary">
              LinkedIn
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Contact;
