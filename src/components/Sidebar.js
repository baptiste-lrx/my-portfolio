// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
  import image1 from '../assets/images/test2.png'; // Remplacez par le chemin réel
  import image2 from '../assets/images/test3.png';

function Sidebar() {
  const theme = useTheme();

  // Importation des images des revues

  const journals = [
    {
      title: 'Titre de la Revue 1',
      image: image1,
      link: 'https://lien-vers-revue-1.com',
    },
    {
      title: 'Titre de la Revue 2',
      image: image2,
      link: 'https://lien-vers-revue-2.com',
    },
    {
      title: 'Titre de la Revue 2',
      image: image1,
      link: 'https://lien-vers-revue-2.com',
    },
    {
      title: 'Titre de la Revue 2',
      image: image2,
      link: 'https://lien-vers-revue-2.com',
    },
    // ...
  ];

  return (
    <Box
      sx={{
        padding: '1rem',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {journals.map((journal, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: theme.shadows[3],
            '&:hover': {
              boxShadow: theme.shadows[6],
            },
            width: '100%', // Occuper toute la largeur de la sidebar
          }}
        >
          <Link href={journal.link} target="_blank" rel="noopener" underline="none">
            <motion.div whileHover={{ scale: 1.05 }} style={{ overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={journal.image}
                alt={journal.title}
                sx={{
                  width: '100%',
                  height: 'auto', // Ajuster la hauteur automatiquement
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff',
                  padding: '0.5rem',
                }}
              >
                <Typography variant="h6">{journal.title}</Typography>
              </CardContent>
            </motion.div>
          </Link>
        </Card>
      ))}
    </Box>
  );
}

export default Sidebar;
