// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div style={homeStyle}>
      <h2>Bienvenue sur mon Portfolio</h2>
      <p>Je suis un développeur passionné par le web et les technologies modernes.</p>
      <section id="about">
        <h3>À propos de moi</h3>
        <p>Je m'appelle [Ton Nom], et je suis développeur web avec une passion pour la création d'applications modernes et performantes.</p>
      </section>
      <section id="projects">
        <h3>Mes Projets</h3>
        <p>Découvrez mes projets récents et ce que j'ai appris en les réalisant.</p>
      </section>
      <section id="contact">
        <h3>Contactez-moi</h3>
        <p>Envoyez-moi un email à <a href="mailto:ton-email@example.com">ton-email@example.com</a>.</p>
      </section>
    </div>
  );
}

const homeStyle = {
  textAlign: 'center',
  padding: '20px',
};

export default Home;
