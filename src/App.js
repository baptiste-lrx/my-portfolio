// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
//import Contact from './components/Contact';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Assurez-vous d'avoir ce composant

import theme1 from './theme'; // Importez votre thème

function App() {
  return (
    <ThemeProvider theme={theme1}>
     <CssBaseline />
      <Header />
      <Profile />
      <MainContent>
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
        <Projects />
      </MainContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
