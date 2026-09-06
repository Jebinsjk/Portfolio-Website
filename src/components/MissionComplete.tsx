import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiRotateCcw } from 'react-icons/fi';
import { asset } from '../utils/asset';

interface Props {
  onRestart: () => void;
}

const MissionComplete = ({ onRestart }: Props) => {
  const [phase, setPhase] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 900),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 3600),
      setTimeout(() => setPhase(4), 4700),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="exitseq"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        className="exitseq__img"
        src={asset('scenes/projects.jpg')}
        alt=""
        aria-hidden
        initial={{ scale: 1.25, filter: 'brightness(0.8) blur(2px)' }}
        animate={
          reduce
            ? { scale: 1.1, filter: 'brightness(0.4)' }
            : { scale: 1.02, filter: 'brightness(0.32) blur(0px)' }
        }
        transition={{ duration: 9, ease: 'easeOut' }}
      />
      <div className="exitseq__shade" />

      <div className="exitseq__content">
        <motion.h2
          className="exitseq__mc"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          MISSION
          <br />
          COMPLETE
        </motion.h2>

        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              className="exitseq__rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              className="exitseq__ty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              THANK YOU FOR VISITING
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              className="exitseq__again"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              See you again.
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <div className="exitseq__btns">
                <button className="cta cta--primary" onClick={onRestart}>
                  <FiRotateCcw size={14} /> RESTART EXPERIENCE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MissionComplete;
