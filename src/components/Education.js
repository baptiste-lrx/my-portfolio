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

const education = [
  {
    institution: 'Université XYZ',
    logo: 'assets/logos/universite-xyz.png',
    period: '2015 - 2018',
    degree: "Diplôme d'ingénieur en systèmes embarqués",
    description: 'Description des projets et cours pertinents.',
  },
  {
    institution: 'Lycée ABC',
    logo: 'assets/logos/lycee-abc.png',
    period: '2012 - 2015',
    degree: 'Baccalauréat scientifique',
    description: 'Mention Très Bien, spécialité mathématiques.',
  },
  // Ajoutez d'autres formations ici
];

function Education() {
  const theme = useTheme();

  return (
    <Section id="education">
      <Typography variant="h4" gutterBottom align="center">
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
                  p: 0,
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src={edu.logo}
                  alt={`Logo de ${edu.institution}`}
                  style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
              </TimelineDot>
              {index !== education.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
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
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {edu.description}
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

export default Education;
