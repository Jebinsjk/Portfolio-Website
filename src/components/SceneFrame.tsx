import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { revealContainer } from '../game/motion';

interface Props {
  children: ReactNode;
  scroll?: boolean;
}

/**
 * Shared wrapper for every scene's foreground content. Handles the cinematic
 * camera-style enter/exit; individual children animate via `revealItem`.
 *
 * On mobile, hides the top-right HUD while scrolling down and brings it back
 * on scroll-up (toggles `html.hud-hidden`).
 */
const SceneFrame = ({ children, scroll }: Props) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (!window.matchMedia('(max-width: 1024px)').matches) return;

    const root = document.documentElement;
    let lastY = el.scrollTop;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = el.scrollTop;
        const dy = y - lastY;
        if (y < 24) {
          root.classList.remove('hud-hidden');
        } else if (dy > 6) {
          root.classList.add('hud-hidden');
        } else if (dy < -6) {
          root.classList.remove('hud-hidden');
        }
        lastY = y;
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      root.classList.remove('hud-hidden');
    };
  }, [scroll]);

  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0, scale: 1.05, filter: 'blur(9px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.985, filter: 'blur(7px)' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={innerRef}
        className={`scene__inner${scroll ? ' scene-scroll' : ''}`}
        variants={revealContainer}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SceneFrame;
