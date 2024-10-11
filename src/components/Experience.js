// src/components/Experience.js
import React from 'react';
import { Typography, Box, Paper, useTheme } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import Section from './Section';

const experiences = [
  {
    company: 'Thales SIX',
    logo: 'assets/logos/entreprise-a.png', // Chemin vers le logo
    period: 'Septembre 2021 - Septembre 2024',
    role: 'Apprenti ingénieur systèmes radios HF',
    description: 'Description de vos responsabilités et réalisations chez Entreprise A.',
  },
  {
    company: 'NTNU',
    logo: 'assets/logos/entreprise-a.png', // Chemin vers le logo
    period: 'Mai 2024 - Aout 2024',
    role: 'Ingénieur stagiaire logiciel embarqué',
    description: 'Description de vos responsabilités et réalisations chez Entreprise A.',
  },
  {
    company: 'Thales DMS',
    logo: 'assets/logos/entreprise-b.png',
    period: 'Avril 2021 - Aout 2021',
    role: 'Technicien stagiaire prototypage electronique ',
    description: 'Description de vos responsabilités et réalisations chez Entreprise B.',
  },
  {
    company: 'Thales DMS',
    logo: 'assets/logos/entreprise-b.png',
    period: 'Avril 2021 - Aout 2021',
    role: 'Technicien stagiaire prototypage electronique ',
    description: 'Description de vos responsabilités et réalisations chez Entreprise B.',
  },
  // Ajoutez d'autres expériences ici
];

function Experience() {
  const theme = useTheme();

  return (
    <Section id="experience">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Expérience Professionnelle
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? 'right' : 'left'}
              variant="body2"
              color="text.secondary"
            >
              <Typography variant="subtitle2">{exp.period}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {index !== 0 && <TimelineConnector />}
              <TimelineDot
                sx={{
                  p: 0,
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src={exp.logo}
                  alt={`Logo de ${exp.company}`}
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
              </TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                  }}
                >
                  <Typography variant="h6" component="span">
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

export default Experience;
