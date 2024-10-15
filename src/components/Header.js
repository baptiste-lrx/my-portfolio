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
import throttle from 'lodash.throttle';

function Header({ onThemeChange, isDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const [showHeader, setShowHeader] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');
  const lastScrollY = useRef(0);
  const isMouseNearTop = useRef(false);

  const MOUSE_THRESHOLD = 50;

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;

    if (activeSection === 'profile') {
      console.log('Active section is profile. Header visible.');
      setShowHeader(true);
      return;
    }

    if (isMouseNearTop.current) {
      console.log('Scroll détecté, mais la souris est près du haut. Header visible.');
      setShowHeader(true);
    } else {
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Défilement vers le bas et au-delà du seuil de 50px
        console.log('Défilement vers le bas. Masquage du header.');
        setShowHeader(false);
      } else {
        // Défilement vers le haut ou en dessous du seuil de 50px
        console.log('Défilement vers le haut ou en dessous du seuil. Affichage du header.');
        setShowHeader(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, 200);

  const handleMouseMove = throttle((e) => {
    if (e.clientY < MOUSE_THRESHOLD) {
      if (!isMouseNearTop.current) {
        console.log('Souris entrée dans la zone de seuil.');
        isMouseNearTop.current = true;
        setShowHeader(true);
      }
    } else {
      if (isMouseNearTop.current) {
        console.log('Souris sortie de la zone de seuil.');
        isMouseNearTop.current = false;
        handleScroll();
      }
    }
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      handleScroll.cancel(); 
      handleMouseMove.cancel();
    };
  }, [activeSection]);

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
          backgroundColor: '#f8fcfc', // Couleur personnalisée
          zIndex: theme.zIndex.drawer + 1, // Assure que le header est au-dessus du drawer
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
                spy={true}
                offset={-70} // Ajustez l'offset si nécessaire pour aligner correctement
                onSetActive={() => setActiveSection(item.to)}
                sx={{
                  marginLeft: 2,
                  fontWeight: 'bold',
                  color: '#183444',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                    color: '#ffffff',
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
                      spy={true}
                      offset={-70} // Ajustez l'offset si nécessaire
                      onSetActive={() => setActiveSection(item.to)}
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
