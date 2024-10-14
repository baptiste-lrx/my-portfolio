// src/components/Contact.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Link, Box, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import de useTheme
import { motion } from 'framer-motion';
import Section from './Section';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const theme = useTheme(); // Utilisation de useTheme pour accéder au thème

  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // État pour gérer l'état de soumission du formulaire
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Variants pour les animations de champ de saisie
  const fieldVariants = {
    focus: { scale: 1.02, borderColor: theme.palette.primary.main },
  };

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple du formulaire
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    console.log('Formulaire soumis:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(true);
    setError(false);
  };

  return (
    <Section
      id="contact"
      sx={{
        color: theme.palette.secondary.contrastText,
        padding: '6rem 2rem',
      }}
    >
      {/* Titre de la section */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main }} // Titre blanc
      >
        Contact
      </Typography>

      {/* Description de la section */}
      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: 'center', color: theme.palette.secondary.contrastText }} // Description blanche
      >
        N'hésitez pas à me contacter pour plus d'informations ou pour discuter de projets potentiels.
      </Typography>

      {/* Formulaire de contact */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <motion.form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Champ Nom */}
              <Grid item xs={12}>
                <motion.div
                  variants={fieldVariants}
                  whileFocus="focus"
                  style={{ width: '100%' }}
                >
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
                        color: theme.palette.secondary.contrastText, // Texte blanc
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.contrastText }, // Label blanc
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Champ Email */}
              <Grid item xs={12}>
                <motion.div
                  variants={fieldVariants}
                  whileFocus="focus"
                  style={{ width: '100%' }}
                >
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
                        color: theme.palette.secondary.contrastText, // Texte blanc
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.contrastText }, // Label blanc
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Champ Message */}
              <Grid item xs={12}>
                <motion.div
                  variants={fieldVariants}
                  whileFocus="focus"
                  style={{ width: '100%' }}
                >
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
                        color: theme.palette.secondary.contrastText, // Texte blanc
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: theme.palette.secondary.contrastText }, // Label blanc
                    }}
                  />
                </motion.div>
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
          sx={{ color: theme.palette.secondary.contrastText }} // Texte blanc
        >
          Retrouvez-moi sur
        </Typography>
        <Box>
          <Link href="mailto:votre.email@example.com" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <EmailIcon fontSize="large" color="primary" /> {/* Icône bleue */}
          </Link>
          <Link href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <LinkedInIcon fontSize="large" color="primary" /> {/* Icône bleue */}
          </Link>
          <Link href="https://github.com/votre-utilisateur" target="_blank" rel="noopener" sx={{ mx: 1 }}>
            <GitHubIcon fontSize="large" color="primary" /> {/* Icône bleue */}
          </Link>
        </Box>
      </Box>
    </Section>
  );
}

export default Contact;
