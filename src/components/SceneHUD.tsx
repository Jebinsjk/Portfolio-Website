import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useNow, clockHM } from './useNow';
import type { SceneId } from '../game/scenes';

interface SectionHud {
  stars: number;
  value: number;
  status: number;
}

/** GTA-style stats per section — wanted level, portfolio value, status bar %. */
const SECTION: Record<SceneId, SectionHud> = {
  home: { stars: 5, value: 1_250_000, status: 100 },
  about: { stars: 2, value: 320_000, status: 44 },
  education: { stars: 3, value: 540_000, status: 62 },
  skills: { stars: 4, value: 880_000, status: 84 },
  experience: { stars: 3, value: 610_000, status: 66 },
  projects: { stars: 5, value: 1_250_000, status: 100 },
  certifications: { stars: 4, value: 940_000, status: 90 },
  contact: { stars: 2, value: 300_000, status: 40 },
};

interface Props {
  sceneId: SceneId;
}

const SceneHUD = ({ sceneId }: Props) => {
  const now = useNow();
  const { stars, value, status } = SECTION[sceneId];

  // GTA-style rolling money counter
  const money = useMotionValue(0);
  const moneyText = useTransform(money, (v) => Math.round(v).toLocaleString('en-US'));

  useEffect(() => {
    const controls = animate(money, value, { duration: 0.9, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [value, money]);

  return (
    <motion.div
      className="hud-tr"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <span className="hud-time">{clockHM(now)}</span>

      <span className="hud-money">
        <span className="hud-money__sym">$</span>
        <motion.span className="hud-money__num">{moneyText}</motion.span>
      </span>

      <div className="hud-meter" aria-hidden>
        <motion.i
          animate={{ width: `${status}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <motion.div
        className="hud-stars"
        key={sceneId}
        role="img"
        aria-label={`Section rating ${stars} of 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < stars;
          return (
            <motion.span
              key={i}
              className={`hud-star${filled ? ' is-filled' : ''}`}
              initial={{ scale: filled ? 0.4 : 1, opacity: filled ? 0.15 : 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: filled ? i * 0.08 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              ★
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SceneHUD;
