// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import image1 from '../assets/images/test4.png';
import image2 from '../assets/images/test3.png';
import image3 from '../assets/images/test5.png';
import image4 from '../assets/images/test6.png';

function Sidebar() {
  const theme = useTheme();

  const journals = [
    {
      title: 'Voir plus',
      image: image1,
      link: 'https://lien-vers-revue-1.com',
    },
    {
      title: 'Voir plus',
      image: image2,
      link: 'https://lien-vers-revue-2.com',
    },
    {
      title: 'Voir plus',
      image: image3,
      link: 'https://lien-vers-revue-2.com',
    },
    {
      title: 'Voir plus',
      image: image4,
      link: 'https://lien-vers-revue-2.com',
    },
    // Ajoutez d'autres revues ici
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, boxShadow: theme.shadows[6] },
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '0.5rem',
          sm: '1rem',
          md: '1rem 4rem',
        },
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        marginRight: {
          xs: '0',
          md: '2rem',
        },
        transition: 'margin 0.3s ease-in-out, padding 0.3s ease-in-out',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: theme.palette.primary.main, textAlign: 'center', marginBottom: '1.5rem' }}
      >
        Revues
      </Typography>
      {journals.map((journal, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover="hover"
          style={{marginBottom: '1.5rem', cursor: 'pointer', overflow: 'hidden' }}
        >
          <Link href={journal.link} target="_blank" rel="noopener" underline="none">
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                borderRadius: '8px',
                boxShadow: theme.shadows[3],
                transition: 'box-shadow 0.3s ease-in-out',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <CardMedia
                component="img"
                image={journal.image}
                alt={`Image de la revue ${journal.title}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: `rgba(24, 52, 68, 0.7)`, // Bleu foncé avec opacité
                  color: "white", // Blanc
                  padding: '0.5rem',
                }}
              >
                <Typography variant="h6">{journal.title}</Typography>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </Box>
  );
}

export default Sidebar;
