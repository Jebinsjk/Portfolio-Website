import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: 'var(--bg)'
    }}>
      {/* Subtle Geometric Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem',
        opacity: 0.03,
        zIndex: 0
      }} />
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: ['-20vw', '20vw', '-10vw', '-20vw'],
          y: ['-20vh', '30vh', '10vh', '-20vh'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, var(--accent-bg) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
        }}
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: ['20vw', '-20vw', '10vw', '20vw'],
          y: ['20vh', '-30vh', '-10vh', '20vh'],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Orb 3 */}
      <motion.div
        animate={{
          x: ['-10vw', '30vw', '0vw', '-10vw'],
          y: ['30vh', '0vh', '40vh', '30vh'],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
