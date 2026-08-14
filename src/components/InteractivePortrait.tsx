import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { asset } from '../utils/asset';

/**
 * InteractivePortrait (About-side)
 *
 * Reveal: whileInView — fade + scale 0.90→1 + slight upward drift.
 * This mirrors the HeroPortrait exit so the visitor feels the same photo
 * "arrived" in the About section.
 *
 * After settling:
 *   - continuous gentle float (y: 0→-8→0)
 *   - pulsing ambient teal glow
 *   - subtle mouse parallax on desktop
 *   - small orbiting teal particles
 */

const InteractivePortrait: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [windowDims, setWindowDims] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onResize = () =>
      setWindowDims({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = windowDims.width < 768;

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / windowDims.width) * 2 - 1,
        y: (e.clientY / windowDims.height) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isMobile, shouldReduceMotion, windowDims]);

  // Springs for mouse parallax — very gentle
  const mouseXSpring = useSpring(mousePos.x, { stiffness: 35, damping: 20 });
  const mouseYSpring = useSpring(mousePos.y, { stiffness: 35, damping: 20 });

  // Responsive sizing
  const portraitW = isMobile ? 200 : windowDims.width < 1024 ? 230 : 268;
  const portraitH = isMobile ? 260 : windowDims.width < 1024 ? 300 : 358;

  return (
    <motion.div
      className="interactive-portrait"
      /* Entry: mirrors HeroPortrait exit — scale up from 0.90, drift from below */
      initial={{ opacity: 0, y: 48, scale: 0.90 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        width: portraitW,
        height: portraitH,
        margin: '0 auto',
        zIndex: 1,
      }}
    >
      {/* Soft ambient teal glow — pulses gently */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.09, 1], opacity: [0.45, 0.72, 0.45] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: '-32px',
          background:
            'radial-gradient(circle, rgba(20,184,166,0.38) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Small orbiting particles (very subtle) */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '10%', right: '-13%',
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 10px rgba(20,184,166,0.75)',
              opacity: 0.65, zIndex: 0, pointerEvents: 'none',
            }}
          />
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            style={{
              position: 'absolute', bottom: '20%', left: '-11%',
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px rgba(20,184,166,0.65)',
              opacity: 0.45, zIndex: 0, pointerEvents: 'none',
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
            style={{
              position: 'absolute', bottom: '42%', right: '-9%',
              width: 4, height: 4, borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 6px rgba(20,184,166,0.6)',
              opacity: 0.4, zIndex: 0, pointerEvents: 'none',
            }}
          />
        </>
      )}

      {/* Resting float + mouse parallax wrapper */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          x: isMobile ? 0 : mouseXSpring,
          rotateX: isMobile ? 0 : mouseYSpring,
          rotateY: isMobile ? 0 : mouseXSpring,
          perspective: 800,
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            y: isMobile ? 0 : mouseYSpring,
          }}
        >
          {/* Outer frame */}
          <motion.div
            initial={{ clipPath: 'inset(8% 8% 8% 8% round 24px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              padding: '3px',
              boxShadow:
                '0 24px 48px -16px rgba(0,0,0,0.52), 0 0 0 1px rgba(20,184,166,0.18)',
              background: 'var(--bg)',
            }}
          >
            {/* Spinning conic border */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-100%',
                background:
                  'conic-gradient(from 0deg, transparent 70%, var(--accent) 100%)',
                zIndex: 0,
              }}
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            />
            {/* Photo */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '21px',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--bg)',
                zIndex: 1,
              }}
            >
              <img
                src={asset('IMG_0865.PNG')}
                alt="Jebinskaran Samlin"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractivePortrait;
