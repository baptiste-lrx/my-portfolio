// src/components/Projects.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box, Grid, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import image1 from '../assets/projects/Logo1.png';
import image2 from '../assets/projects/logo2.jpg';
import image3 from '../assets/projects/logo3.jpg';
import Section from './Section';

const projects = [
  {
    title: 'Traitement du signal en Rust - génération de partition de piano',
    description: 'Un projet qui vise à traiter un signal audio en temps-réel, et le transformer en partition musicale jouable',
    image: image2,
    link: 'https://github.com/baptiste-lrx/Real-time-audio-signal-processing',
  },
  {
    title: 'Création d\'un nouveau langage d\'Animation et de manipulation de SVG',
    description: 'Développement d\'un nouveau langage pour rendre accessible l\'animation d\'images SVG',
    image: image1,
    link: 'https://github.com/Vidoux/SketchAnimate',
  },
  {
    title: 'Création d\'un chatbot spécialisé dans les relations humaines',
    description: 'Le but de ce projet est de voir jusqu\'où on peut aller dans l\'entraînement pour converser',
    image: image3,
    link: 'https://github.com/baptiste-lrx/chat-bot_human-relation',
  },
];

function Projects() {
  const theme = useTheme();

  // Variants pour l'animation d'entrée des cartes
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Variants pour l'animation de survol
  const hoverVariants = {
    rest: {
      scale: 1,
      boxShadow: theme.shadows[2],
      border: `2px solid ${theme.palette.primary.main}`,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: theme.shadows[12],
      border: `2px solid ${theme.palette.secondary.main}`,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Section id="projects">
      <Box
        sx={{
          width: '100%',
          padding: '2rem 0',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centrer horizontalement
          overflow: 'visible',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.primary.main, marginBottom: '2rem' }}
        >
          Projets Personnels
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: '0 auto',
                    border: 'none', // Supprimer la bordure extérieure
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  {/* Zone blanche encadrée avec image et contenu */}
                  <motion.div
                    variants={hoverVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    style={{
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '4px', // Optionnel : arrondir les coins
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={`Image du projet ${project.title}`}
                      sx={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                      }}
                    />
                    <CardContent sx={{ padding: '1rem 1.5rem' }}>
                      <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.link}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 'bold',
                          color: theme.palette.primary.contrastText,
                          backgroundColor: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        Voir sur GitHub
                      </Button>
                    </Box>
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}

export default Projects;
