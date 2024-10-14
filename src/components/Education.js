// src/components/Education.js
import React from 'react';
import { Typography, Paper, useTheme } from '@mui/material';
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
import logo1 from '../assets/logos/enstab.jpg';
import logo2 from '../assets/logos/iut.png';
import logo3 from '../assets/logos/Lyceenaval.png';

const education = [
  {
    institution: 'ENSTA Bretagne',
    logo: logo1,
    period: '2021 - 2024',
    degree: "Diplôme d'ingénieur en systèmes embarqués",
    description:[
      'Informatique embarqué, IA, système d’exploitation, U-Boot, cross compilation...',
      'Hyperfréquence, radiofréquence, radio logiciel, conception PCB et soudure...',
      'Projets : Simulateur de jeu d’instruction (Python), CPU 32bits (FPGA), Langage danimation (Python) , Compilateur, Traitement du son (STM32, C++)', 
    ]
    },
  {
    institution: 'IUT Brest-Morlaix',
    logo: logo2,
    period: '2019 - 2021',
    degree: 'DUT génie electrique et informatique industrielle',
    description: [
      'Conception et mise en œuvre de systèmes électroniques analogiques et numériques',
      'Mise en œuvre des chaines de linformation en télécommunication (2G)',
      'Mesures classiques hautes-fréquences (oscilloscope, VNA)',
      'CAO Altium, Eagle',
    ],
  },
  
  {
    institution: 'Lycée Naval',
    logo: logo3,
    period: '2016 - 2019',
    degree: 'Baccalauréat scientifique',
    description: [
      'Mention, spécialité SVT.',
      'Encadrement militaire',
      'Initiation systèmes numériques'
    ],
  },
];
function Education() {
  const theme = useTheme();

  return (
    <Section id="education">
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#183444' }}>
      Parcours Académique
      </Typography>
      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? 'left' : 'right'}
              variant="body2"
              color="text.secondary"
            >
              <Typography variant="subtitle2">{edu.period}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {index !== 0 && <TimelineConnector />}
              <TimelineDot
                sx={{
                  m: 0,
                  p: 0,
                  width: 60,
                  height: 60,
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src={edu.logo}
                  alt={`Logo de ${edu.institution}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '50%',
                  }}
                />
              </TimelineDot>
              {index !== education.length - 1 && <TimelineConnector />}
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
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.institution}
                  </Typography>
                  {/* Afficher la description sous forme de liste */}
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