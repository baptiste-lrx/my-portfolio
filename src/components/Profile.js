// src/components/Profile.js
import React from 'react';
import { Typography, Avatar, Grid, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Section from './Section';
import profileImage from '../assets/profil/profil.jpeg';

function Profile() {
  const theme = useTheme();
  const isSmallScreen = useTheme().breakpoints.down('sm');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const avatarVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { 
      scale: 1.05,
      rotate: 5,
      boxShadow: theme.shadows[12],
      transition: { duration: 0.3 },
    },
  };

  return (
    <Section
      id="profile"
      noMarginTop
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.blue,
        padding: '6rem 2rem',
        color: theme.palette.getContrastText(theme.palette.background.blue),
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)',
          zIndex: 1,
        }}
      />

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={2}
        direction={{ xs: 'column', md: 'row' }}
      >
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' }, paddingLeft: { md: '2rem' } }}>
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Avatar
              alt="Baptiste Le Roux"
              src={profileImage}
              sx={{
                width: { xs: 200, md: 250 },
                height: { xs: 200, md: 250 },
                border: `4px solid ${theme.palette.secondary.main}`,
                boxShadow: theme.shadows[10],
                transition: 'transform 0.3s ease-in-out',
                margin: isSmallScreen ? '0 auto' : '0',
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={8} sx={{ paddingRight: { md: '2rem' } }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  fontWeight: 700,
                  color: theme.palette.secondary.main, // Blanc sur fond bleu
                }}
              >
                Baptiste Le Roux
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  color: theme.palette.secondary.main, // Blanc sur fond bleu
                }}
              >
                Ingénieur en Systèmes Embarqués
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  marginTop: '2rem',
                  textAlign: { xs: 'center', md: 'left' },
                  color: theme.palette.secondary.main, // Blanc sur fond bleu
                }}
              >
                Passionné par le développement de systèmes embarqués et les technologies innovantes. Je possède une solide expérience dans la conception, le développement et l'optimisation de solutions embarquées pour divers secteurs. Toujours en quête de nouveaux défis, je m'efforce d'améliorer constamment mes compétences techniques et de contribuer efficacement aux projets de mon équipe.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: 'italic',
                    textAlign: { xs: 'center', md: 'left' },
                    color: theme.palette.secondary.main, // Blanc sur fond bleu
                  }}
                >
                  "Le vent se lève, il faut tenter de vivre."
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: theme.palette.secondary.main, // Blanc sur fond bleu
                  }}
                >
                  - Paul Valéry (popularisé par le film de Hayao Miyazaki)
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Profile;
