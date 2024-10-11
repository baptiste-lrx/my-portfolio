// src/components/Header.js
import React, { useState } from 'react';
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

function Header({ onThemeChange, isDarkMode }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
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
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mon Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                smooth
                duration={500}
                sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                    color: '#fff',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <Switch checked={isDarkMode} onChange={onThemeChange} />
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
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={toggleDrawer}>
              <ListItemText
                primary={
                  <Link to={item.to} smooth duration={500}>
                    {item.text}
                  </Link>
                }
              />
            </ListItem>
          ))}
          <ListItem>
            <Switch checked={isDarkMode} onChange={onThemeChange} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
