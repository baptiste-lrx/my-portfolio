// src/components/Contact.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Link, Box, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Section from './Section';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser'; // Import correct du package

function Contact() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Field Changed: ${name} = ${value}`); // Log des changements
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple du formulaire
    console.log('Form Data Submitted:', formData);
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    // Configuration de EmailJS avec les variables d'environnement
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Vérification des identifiants
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Public Key:', publicKey);

    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS: Missing service ID, template ID, or public key.');
      setError(true);
      return;
    }

    // Envoyer l'e-mail via EmailJS
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setError(false);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (err) => {
        console.log('FAILED...', err);
        setError(true);
      });
  };

  // Variants pour le formulaire (optionnel, peut être simplifié)
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

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

      {/* Formulaire de contact */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={2}>
              {/* Champ Nom */}
              <Grid item xs={12}>
                <TextField
                  label="Nom"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    sx: { 
                      transition: 'transform 0.2s, border-color 0.2s',
                      color: theme.palette.secondary.contrastText,
                      borderColor: theme.palette.primary.main, // Bordure bleue
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: theme.palette.secondary.contrastText },
                  }}
                />
              </Grid>

              {/* Champ Email */}
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    sx: { 
                      transition: 'transform 0.2s, border-color 0.2s',
                      color: theme.palette.secondary.contrastText,
                      borderColor: theme.palette.primary.main, // Bordure bleue
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: theme.palette.secondary.contrastText },
                  }}
                />
              </Grid>

              {/* Champ Message */}
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  InputProps={{
                    sx: { 
                      transition: 'transform 0.2s, border-color 0.2s',
                      color: theme.palette.secondary.contrastText,
                      borderColor: theme.palette.primary.main, // Bordure bleue
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: theme.palette.secondary.contrastText },
                  }}
                />
              </Grid>

              {/* Bouton de soumission */}
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                  Envoyer
                </Button>
              </Grid>

              {/* Message de succès */}
              {submitted && (
                <Grid item xs={12}>
                  <Alert severity="success" onClose={() => setSubmitted(false)}>
                    Votre message a été envoyé avec succès !
                  </Alert>
                </Grid>
              )}

              {/* Message d'erreur */}
              {error && (
                <Grid item xs={12}>
                  <Alert severity="error" onClose={() => setError(false)}>
                    Veuillez remplir tous les champs avant de soumettre.
                  </Alert>
                </Grid>
              )}
            </Grid>
          </motion.form>
        </Grid>
      </Grid>

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
