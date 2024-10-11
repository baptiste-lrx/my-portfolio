// src/components/Projects.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Section from './Section';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Projet Personnel 1',
    description: 'Description du projet personnel 1.',
    image: 'lien-vers-image-projet-1.jpg',
    link: 'https://github.com/votre-utilisateur/projet1',
  },
  // Ajoutez d'autres projets personnels ici
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  return (
    <Section id="projects">
      <Typography variant="h4" gutterBottom>
        Projets Personnels
      </Typography>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Card
            key={index}
            elevation={0}
            style={{ margin: '0 10px', border: '1px solid #e0e0e0' }}
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
        ))}
      </Slider>
    </Section>
  );
}

export default Projects;
