// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import throttle from 'lodash.throttle'; // Importation de lodash.throttle

function Header({ onThemeChange, isDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  // États pour gérer le défilement
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0); // Utilisation de useRef pour stocker la dernière position de défilement

  // Fonction pour gérer le défilement avec throttling
  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      // Défilement vers le bas et au-delà du seuil de 50px
      setShowHeader(false);
    } else {
      // Défilement vers le haut ou en dessous du seuil de 50px
      setShowHeader(true);
    }

    lastScrollY.current = currentScrollY;
  }, 200); // Appelé au maximum toutes les 200ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Annule tout appel throttled en attente
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Profil', to: 'profile' },
    { text: 'Expérience', to: 'experience' },
    { text: 'Éducation', to: 'education' },
    { text: 'Projets', to: 'projects' },
    { text: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: showHeader ? 0 : '-80px', // Ajustez cette valeur selon la hauteur de votre AppBar
          transition: 'top 0.3s ease-in-out',
          backgroundColor: '#ffff', // Couleur personnalisée
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#183444', // Couleur du texte pour correspondre avec la DA
              fontWeight: 'bold',
            }}
          >
            Mon Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                smooth
                duration={500}
                sx={{
                  marginLeft: 2,
                  fontWeight: 'bold',
                  color: '#183444',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                    color: '#fff',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <Switch
              checked={isDarkMode}
              onChange={onThemeChange}
              color="default"
              sx={{ marginLeft: 2 }}
            />
          </Box>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Compense la hauteur de l'AppBar */}
      <Toolbar />
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemText
                  primary={
                    <Link
                      to={item.to}
                      smooth
                      duration={500}
                      style={{ textDecoration: 'none', color: '#183444' }}
                    >
                      {item.text}
                    </Link>
                  }
                />
              </ListItem>
            ))}
            <ListItem>
              <Switch
                checked={isDarkMode}
                onChange={onThemeChange}
                color="default"
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
