import React from 'react';
import { motion, useTransform, MotionValue, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/asset';

/**
 * HeroPortrait
 *
 * The Hero-side profile photo.
 *
 * Scroll behaviour (driven by Hero section's scrollYProgress 0→1):
 *   - 0.0 → idle: float gently, subtle glow, mouse-parallax handled by parent
 *   - 0.0 → 0.55: fade out, scale 1→0.88, drift downward ~60px
 *   - 0.05 → 0.45: transition graphics (particles, orbit arc) peak at 0.25
 */

interface HeroPortraitProps {
  /** scrollYProgress from the Hero section (0 at top → 1 when fully scrolled away) */
  scrollYProgress: MotionValue<number>;
}

// Particle data — deterministic so no random on every render
const PARTICLES = [
  { top: '12%', right: '-14%', size: 7, delay: 0, dx: [0, 12, 0], dy: [0, -18, 0], dur: 5 },
  { top: '38%', right: '-18%', size: 5, delay: 0.8, dx: [0, 16, 0], dy: [0, -10, 0], dur: 6.5 },
  { bottom: '22%', left: '-12%', size: 6, delay: 0.4, dx: [0, -14, 0], dy: [0, 14, 0], dur: 5.8 },
  { bottom: '8%', right: '-10%', size: 4, delay: 1.2, dx: [0, 10, 0], dy: [0, 12, 0], dur: 7 },
  { top: '65%', left: '-16%', size: 5, delay: 0.6, dx: [0, -12, 0], dy: [0, -8, 0], dur: 6 },
];

const HeroPortrait: React.FC<HeroPortraitProps> = ({ scrollYProgress }) => {
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked transforms — image exits Hero while scrolling
  const imageOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.88]);
  const imageY = useTransform(scrollYProgress, [0, 0.55], [0, shouldReduceMotion ? 0 : 56]);

  // Transition graphics: appear mid-scroll then vanish
  const graphicsOpacity = useTransform(scrollYProgress, [0, 0.08, 0.28, 0.52], [0, 1, 1, 0]);
  const orbitScale = useTransform(scrollYProgress, [0.05, 0.28, 0.52], [0.7, 1.1, 0.85]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const secondOrbitRotate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Intensify glow during transition
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [0.55, 0.85, 0]);

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        opacity: imageOpacity,
        scale: imageScale,
        y: imageY,
        transformOrigin: 'center bottom',
      }}
    >
      {/* ── Ambient teal glow behind photo ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-40px',
          background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.45) 0%, transparent 68%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: glowOpacity,
        }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Transition graphics: orbit ring + particles ── */}
      {!shouldReduceMotion && (
        <motion.div
          style={{
            position: 'absolute',
            inset: '-50px',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: graphicsOpacity,
            scale: orbitScale,
          }}
        >
          {/* Faint circular orbit arc */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '20px',
              borderRadius: '50%',
              border: '1px solid rgba(20,184,166,0.3)',
              rotate: orbitRotate,
            }}
          >
            {/* Orbit dot travelling the arc */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px rgba(20,184,166,0.8)',
              }}
            />
          </motion.div>

          {/* Second, slightly offset orbit ring */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '40px',
              borderRadius: '50%',
              border: '1px dashed rgba(20,184,166,0.18)',
              rotate: secondOrbitRotate,
            }}
          />

          {/* Particles */}
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              animate={{ x: p.dx, y: p.dy }}
              transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
              style={{
                position: 'absolute',
                top: p.top,
                right: (p as any).right,
                bottom: (p as any).bottom,
                left: (p as any).left,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: `0 0 ${p.size * 2}px rgba(20,184,166,0.7)`,
                opacity: 0.75,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* ── Gentle resting float (always active) ── */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      >
        {/* Photo frame with illuminated running border */}
        <motion.div
          initial={{ clipPath: 'inset(10% 10% 10% 10% round 24px)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            padding: '3px',
            boxShadow: '0 24px 48px -16px rgba(0,0,0,0.55)',
            background: 'var(--bg)',
          }}
        >
          {/* Conic spinning border */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-100%',
              background: 'conic-gradient(from 0deg, transparent 70%, var(--accent) 100%)',
              zIndex: 0,
            }}
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          />
          {/* Inner image */}
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
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroPortrait;
