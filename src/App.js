// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid, Box } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Assurez-vous d'avoir ce composant
import BackToTop from './components/BackToTop'; // Import du composant BackToTop

import theme1 from './theme'; // Importez votre thème

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Assure que le conteneur prend toute la hauteur de la fenêtre
        }}
      >
        <Header />
        <Profile />
        <MainContent
          sx={{
            flex: 1, // Permet à ce conteneur de s'étendre et de prendre tout l'espace disponible
            padding: '2rem 4rem 0 4rem', // Top, Right, Bottom, Left
            backgroundColor: theme1.palette.background.default,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Sections principales */}
              <Experience />
              <Education />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Sidebar */}
              <Sidebar />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '2rem' }}> {/* Réduit de 4rem à 2rem */}
            <Projects />
          </Box>
          {/* Si vous avez la section Contact, ajoutez-la ici sans marge supplémentaire */}
          {/* <Box sx={{ marginTop: '2rem' }}> 
            <Contact />
          </Box> */}
        <Contact />
        </MainContent>
        <Footer />
        <BackToTop /> {/* Intégration du bouton BackToTop */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
