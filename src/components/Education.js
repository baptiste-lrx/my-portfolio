// src/components/Education.js
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import Section from './Section';

const education = [
  {
    institution: 'Université XYZ',
    period: '2015 - 2018',
    degree: "Diplôme d'ingénieur en systèmes embarqués",
    description: 'Description des projets et cours pertinents.',
  },
  // Ajoutez d'autres formations ici
];

function Education() {
  return (
    <Section id="education">
      <Typography variant="h4" gutterBottom>
        Parcours Académique
      </Typography>
      {education.map((edu, index) => (
        <Card
          key={index}
          elevation={0}
          style={{ marginBottom: '1.5rem', border: '1px solid #e0e0e0' }}
        >
          <CardContent>
            <Typography variant="h6">{edu.degree}</Typography>
            <Typography variant="subtitle1">{edu.institution}</Typography>
            <Typography variant="subtitle2">{edu.period}</Typography>
            <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
              {edu.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}

export default Education;
