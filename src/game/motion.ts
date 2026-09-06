import type { Variants, Transition } from 'framer-motion';

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

/** Cinematic text reveal: blur → clear, slight rise. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const sceneEnter: Transition = { duration: 1, ease: EASE_OUT };
