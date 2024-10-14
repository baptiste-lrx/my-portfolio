// src/components/Education.js
import React from 'react';
import { Typography, Box, Paper, useTheme } from '@mui/material';
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
import logo1 from '../assets/logos/enstab.jpg';
import logo2 from '../assets/logos/iut.png';
import logo3 from '../assets/logos/Lyceenaval.png';

const education = [
  {
    institution: 'ENSTA Bretagne',
    logo: logo1,
    period: '2021 - 2024',
    degree: "Diplôme d'ingénieur en systèmes embarqués",
    description: [
      'Informatique embarqué, IA, système d’exploitation, U-Boot, cross compilation...',
      'Hyperfréquence, radiofréquence, radio logiciel, conception PCB et soudure...',
      'Projets : Simulateur de jeu d’instruction (Python), CPU 32bits (FPGA), Langage d’animation (Python), Compilateur, Traitement du son (STM32, C++)',
    ],
  },
  {
    institution: 'IUT Brest-Morlaix',
    logo: logo2,
    period: '2019 - 2021',
    degree: 'DUT Génie Électrique et Informatique Industrielle',
    description: [
      'Conception et mise en œuvre de systèmes électroniques analogiques et numériques',
      'Mise en œuvre des chaînes de l’information en télécommunication (2G)',
      'Mesures classiques hautes-fréquences (oscilloscope, VNA)',
      'CAO Altium, Eagle',
    ],
  },
  {
    institution: 'Lycée Naval',
    logo: logo3,
    period: '2016 - 2019',
    degree: 'Baccalauréat Scientifique',
    description: [
      'Mention, spécialité SVT.',
      'Encadrement militaire',
      'Initiation systèmes numériques',
    ],
  },
];

function Education() {
  const theme = useTheme();

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <Section id="education">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main, marginBottom: '2rem' }}
      >
        Parcours Académique
      </Typography>
      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? 'right' : 'left'}
              variant="body2"
              color="text.secondary"
            >
              <Typography variant="subtitle2">{edu.period}</Typography>
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
                    src={edu.logo}
                    alt={`Logo de ${edu.institution}`}
                    style={{
                      width: '90%',
                      height: '90%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </motion.div>
              {index !== education.length - 1 && <TimelineConnector />}
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
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.institution}
                  </Typography>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                    {edu.description.map((item, idx) => (
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

export default Education;
