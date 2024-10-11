// src/components/Section.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Section({ children, id, style, noMarginTop }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionStyle = {
    marginTop: noMarginTop ? 0 : '6rem',
    ...style,
  };

  return (
    <section id={id} ref={ref} style={sectionStyle}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default Section;
