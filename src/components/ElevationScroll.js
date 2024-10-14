// src/components/ElevationScroll.js
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'rgba(24, 52, 68, 0.95)' : 'transparent',
      transition: 'background-color 0.3s ease',
    },
  });
}

export default ElevationScroll;
