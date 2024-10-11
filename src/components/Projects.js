// src/components/Projects.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Section from './Section';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// src/components/Projects.js
const projects = [
  {
    title: 'Détection d\'objets avec Raspberry Pi',
    description: 'Un projet qui utilise OpenCV et un Raspberry Pi pour détecter des objets en temps réel.',
    image: 'assets/projects/raspberry-pi-opencv.jpg',
    link: 'https://github.com/votre-utilisateur/detection-objets-raspberrypi',
  },
  {
    title: 'Application Mobile de Contrôle de Drones',
    description: 'Développement d\'une application mobile pour contrôler des drones à distance.',
    image: 'assets/projects/drone-control-app.jpg',
    link: 'https://github.com/votre-utilisateur/controle-drone-app',
  },
  {
    title: 'Système Domotique avec Arduino',
    description: 'Création d\'un système domotique pour contrôler les lumières et les volets via Arduino.',
    image: 'assets/projects/arduino-home-automation.jpg',
    link: 'https://github.com/votre-utilisateur/domotique-arduino',
  },
  // Ajoutez d'autres projets ici
];


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Section id="projects">
      <Typography variant="h4" gutterBottom align="center">
        Projets Personnels
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <motion.div whileHover="hover" variants={cardVariants}>
              <Card
                elevation={0}
                sx={{
                  margin: '0 10px',
                  border: '1px solid #e0e0e0',
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={`Image du ${project.title}`}
                />
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: '0.5rem' }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  Voir sur GitHub
                </Button>
              </Card>
            </motion.div>
          </div>
        ))}
      </Slider>
    </Section>
  );
}

export default Projects;
