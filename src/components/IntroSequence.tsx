import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { INTRO_SHOTS } from '../game/scenes';

interface Props {
  onDone: () => void;
}

const SHOT_MS = 2600;
const BLACK_MS = 1900;
const TOTAL = INTRO_SHOTS.length + 1; // +1 for the opening black card

const IntroSequence = ({ onDone }: Props) => {
  const [step, setStep] = useState(0); // 0 = black card, 1..N = shots
  const [flash, setFlash] = useState(false);
  const reduce = useReducedMotion();
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    if (doneRef.current) return;
    const dur = step === 0 ? BLACK_MS : SHOT_MS;
    const t = setTimeout(() => {
      if (step >= TOTAL - 1) {
        finish();
        return;
      }
      setFlash(true);
      setTimeout(() => setFlash(false), 140);
      setStep((s) => s + 1);
    }, dur);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const progress = ((step + 1) / TOTAL) * 100;
  const shot = step > 0 ? INTRO_SHOTS[step - 1] : null;

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="black"
            className="intro-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="intro-black__text"
              animate={reduce ? {} : { opacity: [0, 1, 0.4, 1, 0.7, 1] }}
              transition={{ duration: 1.6, times: [0, 0.2, 0.35, 0.5, 0.7, 1] }}
            >
              JK PRESENTS
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            className="intro__shot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="intro__img"
              src={shot!.image}
              alt=""
              aria-hidden
              initial={{ scale: 1.02, x: '0%', filter: 'blur(8px)' }}
              animate={
                reduce
                  ? { scale: 1.05, filter: 'blur(0px)' }
                  : { scale: 1.2, x: step % 2 ? '-3%' : '3%', filter: 'blur(0px)' }
              }
              transition={{ duration: SHOT_MS / 1000 + 0.4, ease: 'easeOut' }}
            />
            <div className="intro__shade" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {flash && (
          <motion.div
            className="intro__flash"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          />
        )}
      </AnimatePresence>

      <div className="intro__loading">INITIALIZING...</div>
      <div className="intro__bar">
        <motion.i animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
      </div>
      <button className="intro__skip" onClick={finish}>
        SKIP INTRO
      </button>
    </motion.div>
  );
};

export default IntroSequence;
