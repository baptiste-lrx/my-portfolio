// src/components/Loader.js
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Durée du loader
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
        >
          Chargement...
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
