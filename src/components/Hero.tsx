import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import HeroPortrait from './HeroPortrait';
import { asset } from '../utils/asset';
import './Hero.scss';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLensActive, setIsLensActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(20px)']);

  useEffect(() => {
    // Disable lens on mobile devices where fine pointer isn't available
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="hero-section"
      onMouseEnter={() => setIsLensActive(true)}
      onMouseLeave={() => setIsLensActive(false)}
    >
      {/* Interactive Lens / Glow */}
      {isLensActive && !shouldReduceMotion && (
        <motion.div 
          className="hero-glow"
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
          style={{ 
            position: 'fixed', 
            top: -400, 
            left: -400, 
            width: 800, 
            height: 800, 
            background: 'radial-gradient(circle, var(--accent-bg) 0%, transparent 60%)', 
            borderRadius: '50%', 
            pointerEvents: 'none', 
            zIndex: 0 
          }}
        />
      )}

      {/* Massive Faded Running Background Text */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, display: 'flex', alignItems: 'center' }}>
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          <span style={{ 
            fontSize: 'min(25vw, 400px)', 
            fontWeight: 800, 
            color: 'var(--text)', 
            opacity: 0.03, 
            lineHeight: 1,
            paddingRight: '100px'
          }}>
            JEBINSKARAN SAMLIN &nbsp;&nbsp;&nbsp;&nbsp; JEBINSKARAN SAMLIN &nbsp;&nbsp;&nbsp;&nbsp; JEBINSKARAN SAMLIN
          </span>
        </motion.div>
      </div>

    <motion.div 
        className="container hero-container" 
        style={{ y: y1, opacity, filter: blur, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', padding: '8rem 2vw 4rem' }}
      >
        <div className="hero-grid">
          
          <div className="hero-text-content">
            {/* Mask Reveal for JEBINSKARAN */}
            <div style={{ overflow: 'hidden', paddingBottom: '10px' }}>
              <motion.h1 
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-hero" 
                style={{ margin: 0, position: 'relative', zIndex: 2 }}
              >
                JEBINSKARAN
              </motion.h1>
            </div>
            
            {/* Mask Reveal for SAMLIN */}
            <div style={{ overflow: 'hidden', marginTop: '-0.1em' }}>
              <motion.h1 
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="text-hero hero-outline" 
                style={{ margin: 0 }}
              >
                SAMLIN
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              style={{ marginTop: '2.5rem', maxWidth: '600px' }}
            >
              <h2 className="text-subtitle" style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 500 }}>
                Computer Science Engineer<br/>& Software Developer
              </h2>
              <p style={{ fontSize: '1.25rem', opacity: 0.8, lineHeight: 1.6 }}>
                "I build software, explore cybersecurity, and work on emerging technologies."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="hero-cta" 
              style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={asset('JebinsKaran__Resume.pdf')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                data-cursor="text:VIEW"
              >
                VIEW MY RESUME
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={asset('JebinsKaran__Resume.pdf')} 
                download="JebinsKaran__Resume.pdf" 
                className="btn btn-secondary" 
                data-cursor="text:DOWNLOAD"
              >
                DOWNLOAD RESUME
              </motion.a>
            </motion.div>

          </div>

          {/* ── Hero portrait column ── */}
          <motion.div
            className="hero-visual"
            style={{ position: 'relative', width: '380px', height: '520px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <HeroPortrait scrollYProgress={scrollYProgress} />
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ position: 'absolute', bottom: '2rem', left: '2vw', display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll to explore</span>
          <FiArrowDown className="scroll-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
