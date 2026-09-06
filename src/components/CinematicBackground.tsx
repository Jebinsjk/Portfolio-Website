import { motion, useReducedMotion } from 'framer-motion';
import type { SceneConfig } from '../game/scenes';

interface Props {
  scene: SceneConfig;
}

/**
 * Moving cinematic background. The image never sits still — a slow 22s camera
 * drift (pan + breathe) loops forever, layered under colour grade, tint,
 * light-leak, and vignette. Direction comes from scene.pan.
 */
const CinematicBackground = ({ scene }: Props) => {
  const reduce = useReducedMotion();

  const drift =
    scene.pan === 'left'
      ? { x: ['0%', '-3.5%', '0%'], y: ['0%', '-1.5%', '0%'], scale: [1.06, 1.14, 1.06] }
      : scene.pan === 'right'
        ? { x: ['0%', '3.5%', '0%'], y: ['0%', '-1.2%', '0%'], scale: [1.06, 1.14, 1.06] }
        : { x: ['0%', '-1.2%', '0%'], y: ['0%', '1%', '0%'], scale: [1.05, 1.18, 1.05] };

  const gradeClass =
    scene.mood === 'night'
      ? 'cbg__grade cbg__grade--night'
      : scene.mood === 'bright'
        ? 'cbg__grade cbg__grade--bright'
        : 'cbg__grade';

  return (
    <motion.div
      className="cbg"
      initial={{ opacity: 0, scale: 1.12, filter: 'blur(14px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        key={scene.image}
        className="cbg__img"
        src={scene.image}
        alt=""
        aria-hidden
        loading="eager"
        animate={reduce ? { scale: 1.06 } : drift}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 24, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <div className={gradeClass} />
      <div className="cbg__tint" />
      {!reduce && (
        <motion.div
          className="cbg__leak"
          animate={{ opacity: [0.3, 0.65, 0.3], x: ['0%', '8%', '0%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <div className="cbg__vignette" />
    </motion.div>
  );
};

export default CinematicBackground;
