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
      'Développement dun simulateur en python permettant démuler le comportement d’un algorithme intégré dans un poste de radio',
      'Parsage XML de fichiers Syslog (data en sortie des postes) et analyse de données',
      'Modélisation dun système (mise en réseau de plusieurs postes radios) via le logiciel de modélisation Capella basé sur la méthode MBSE',
      'Découvertes et approfondissement des langages de programmation Python, Script Bash',
      'Découvertes et utilisations d’outils et de technologies utilisés en entreprise Git, Agilité, LaTex',
    ],
  },
  {
    company: 'NTNU',
    logo: logo2,
    period: 'Mai 2024 - Aout 2024',
    role: 'Ingénieur stagiaire logiciel embarqué',
    description: [
      'Prototypage d’un casque EEG avec deux électrodes mobiles',
      'IHM de contrôle et d’analyse en PyQt et Firmware du casque en C++ embarqué',
      'Amélioration d’un code existant pour contrôler un drone par la pensée',],
  },
  {
    company: 'Thales DMS',
    logo: logo1,
    period: 'Avril 2021 - Aout 2021',
    role: 'Technicien stagiaire prototypage electronique ',
    description: [
      'Réalisation de schémas électroniques et de PCB (Eagle)',
      'Documentation (datasheet) et recherche de composants performants',
      'Soudure et phase de test',
    ],
  },
  {
    company: 'Grange du ToulBoss',
    logo: logo3,
    period: 'Avril 2021 - Aout 2021',
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

  return (
    <Section id="experience">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#183444' }}>
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
                    padding: '2rem',
                    marginBottom: '2rem',
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
