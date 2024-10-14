// src/components/Projects.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/test2.png';

const projects = [
  {
    title: 'Détection d\'objets avec Raspberry Pi',
    description: 'Un projet qui utilise OpenCV et un Raspberry Pi pour détecter des objets en temps réel.',
    image: image1,
    link: 'https://github.com/votre-utilisateur/detection-objets-raspberrypi',
  },
  {
    title: 'Application Mobile de Contrôle de Drones',
    description: 'Développement d\'une application mobile pour contrôler des drones à distance.',
    image: image1,
    link: 'https://github.com/votre-utilisateur/controle-drone-app',
  },
  {
    title: 'Système Domotique avec Arduino',
    description: 'Création d\'un système domotique pour contrôler les lumières et les volets via Arduino.',
    image: image1,
    link: 'https://github.com/votre-utilisateur/domotique-arduino',
  },
  // Ajoutez d'autres projets ici
];

function Projects() {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 500,
    slidesToShow: Math.min(projects.length, 3),
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: Math.min(projects.length, 2),
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: theme.shadows[12],
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box sx={{ width: '100%', padding: '2rem 0' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main, marginBottom: '2rem' }}
      >
        Projets Personnels
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} px={1}>
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  margin: '0 auto',
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={`Image du projet ${project.title}`}
                  sx={{
                    objectFit: 'cover',
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
              </Card>
            </motion.div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Projects;
