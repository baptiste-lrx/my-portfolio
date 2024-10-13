// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { CssBaseline, Grid } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Assurez-vous d'avoir ce composant

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header onThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
      <div style={{ paddingTop: '64px' }}>
        {/* Section Profil occupant toute la largeur */}
        <Profile />

        {/* La grille commence ici */}
        <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={8}>
            {/* Contenu principal */}
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Sidebar */}
            <Sidebar />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
