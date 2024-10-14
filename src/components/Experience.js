// src/components/Experience.js
import React from 'react';
import { Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import Section from './Section';
import logo1 from '../assets/logos/thales.png';
import logo2 from '../assets/logos/ntnu.png';
import logo3 from '../assets/logos/images.jpeg';

const experiences = [
  {
    company: 'Thales SIX',
    logo: logo1,
    period: 'Septembre 2021 - Septembre 2024',
    role: 'Apprenti ingénieur systèmes radios HF',
    description: [
      'Développement dun simulateur en Python permettant de modéliser le comportement d’un algorithme intégré dans un poste de radio',
      'Parsage XML de fichiers Syslog et analyse de données',
      'Modélisation d’un système via le logiciel Capella basé sur la méthode MBSE',
      'Approfondissement des langages de programmation Python et Bash',
      'Utilisation d’outils et technologies en entreprise : Git, Agile, LaTeX',
    ],
  },
  {
    company: 'NTNU',
    logo: logo2,
    period: 'Mai 2024 - Août 2024',
    role: 'Ingénieur stagiaire logiciel embarqué',
    description: [
      'Prototypage d’un casque EEG avec deux électrodes mobiles',
      'Développement d’IHM en PyQt et firmware en C++ embarqué',
      'Amélioration d’un code existant pour contrôler un drone par la pensée',
    ],
  },
  {
    company: 'Thales DMS',
    logo: logo1,
    period: 'Avril 2021 - Août 2021',
    role: 'Technicien stagiaire prototypage électronique',
    description: [
      'Réalisation de schémas électroniques et de PCB (Eagle)',
      'Documentation et recherche de composants performants',
      'Soudure et phase de test',
    ],
  },
  {
    company: 'Restaurant Grange du ToulBoss',
    logo: logo3,
    period: 'Avril 2021 - Août 2021',
    role: 'Crêpier en restauration',
    description: [
      'Responsable service crêpes',
      'Gestion des stocks',
      'Relationnel client',
    ],
  },
];

function Experience() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isSmallScreen ? 0 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <Section id="experience">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main, marginBottom: '2rem' }}
      >
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
              <motion.div
                variants={logoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={exp.logo}
                    alt={`Logo de ${exp.company}`}
                    style={{
                      width: '90%',
                      height: '90%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </motion.div>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: '2rem',
                    marginBottom: '2rem',
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                  }}
                >
                  <Typography variant="h6" component="span" sx={{ color: theme.palette.primary.main }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company}
                  </Typography>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
                    ))}
                  </ul>
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
