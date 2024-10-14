// src/components/Projects.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Liste des projets
const projects = [
  {
    title: 'Détection d\'objets avec Raspberry Pi',
    description: 'Un projet qui utilise OpenCV et un Raspberry Pi pour détecter des objets en temps réel.',
    image: '/assets/projects/raspberry-pi-opencv.jpg',
    link: 'https://github.com/votre-utilisateur/detection-objets-raspberrypi',
  },
  {
    title: 'Application Mobile de Contrôle de Drones',
    description: 'Développement d\'une application mobile pour contrôler des drones à distance.',
    image: '/assets/projects/drone-control-app.jpg',
    link: 'https://github.com/votre-utilisateur/controle-drone-app',
  },
  {
    title: 'Système Domotique avec Arduino',
    description: 'Création d\'un système domotique pour contrôler les lumières et les volets via Arduino.',
    image: '/assets/projects/arduino-home-automation.jpg',
    link: 'https://github.com/votre-utilisateur/domotique-arduino',
  },
  // Ajoutez d'autres projets ici
];

function Projects() {
  // Paramètres du carousel
  const settings = {
    dots: true,
    infinite: projects.length > 3, // Infini si plus de 3 projets
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: projects.length > 3, // Centre si plus de 3 projets
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 960, // Tablets
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600, // Mobiles
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  // Variants pour Framer Motion
  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box sx={{ width: '100%', padding: '2rem 0' }}> {/* Réduit le padding vertical */}
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#183444' }}>
        Projets Personnels
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} px={1}> {/* Réduit le padding horizontal */}
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={cardVariants}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  margin: '0 auto',
                  border: '1px solid #e0e0e0',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  // height: 'auto', // Assure une hauteur automatique
                }}
              >
                <CardMedia
                  component="img"
                  height="120" // Réduit la hauteur de l'image
                  image={project.image}
                  alt={`Image du ${project.title}`}
                  sx={{ objectFit: 'cover' }} // Assure que l'image couvre bien la zone sans distorsion
                />
                <CardContent sx={{ padding: '1rem 1.5rem' }}> {/* Réduit le padding */}
                  <Typography variant="h6" gutterBottom sx={{ color: '#183444', fontSize: '1.2rem' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', paddingBottom: '0.5rem' }}> {/* Réduit le padding en bas */}
                  <Button
                    variant="contained"
                    color="secondary"
                    href={project.link}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: theme => theme.palette.secondary.dark,
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
