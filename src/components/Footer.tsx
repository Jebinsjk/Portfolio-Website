import React from 'react';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: 'auto' }}
    >
      <p style={{ color: 'var(--text)', fontSize: '0.9rem' }}>
        Built by Jebinskaran
      </p>
    </motion.footer>
  );
};

export default Footer;
