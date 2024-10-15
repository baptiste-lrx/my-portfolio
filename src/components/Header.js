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
      setShowHeader(true);
      return;
    }

    if (isMouseNearTop.current) {
      setShowHeader(true);
    } else {
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, 200);

  const handleMouseMove = throttle((e) => {
    if (e.clientY < MOUSE_THRESHOLD) {
      if (!isMouseNearTop.current) {
        isMouseNearTop.current = true;
        setShowHeader(true);
      }
    } else {
      if (isMouseNearTop.current) {
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
          top: showHeader ? 0 : '-80px',
          transition: 'top 0.3s ease-in-out',
          backgroundColor: activeSection === 'profile' ? '#f8fcfc' : 'rgba(248, 252, 252, 0)',
          boxShadow: activeSection === 'profile' ? theme.shadows[4] : 'none',
          backdropFilter: activeSection === 'profile' ? 'none' : 'blur(10px)',
          width: '100%', // Assure que l'AppBar ne dépasse pas la largeur du viewport
          maxWidth: '100%', // Garantie supplémentaire
          overflowX: 'hidden', // Empêche le débordement horizontal
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1200px', // Limite la largeur du contenu interne
            margin: '0 auto', // Centre le contenu
            paddingX: { xs: 1, sm: 2 }, // Ajuste les paddings pour différentes tailles d'écran
          }}
        >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#183444',
              fontWeight: 'bold',
              whiteSpace: 'nowrap', // Empêche le texte de se casser
            }}
          >
            Mon Portfolio
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              overflowX: 'auto', // Permet le défilement horizontal si nécessaire
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                smooth
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item.to)}
                sx={{
                  marginLeft: 2,
                  fontWeight: 'bold',
                  color: '#183444',
                  whiteSpace: 'nowrap', // Empêche le texte de se casser
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
                      offset={-70}
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
