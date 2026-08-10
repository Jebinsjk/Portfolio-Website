import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.scss';

const loaderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const Loader: React.FC = () => {
  // Show "JS" for 0.8s then name for 0.8s then fade out
  const [stage, setStage] = React.useState<'js' | 'name'>('js');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('name');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="loader" variants={loaderVariants} initial="hidden" animate="visible" exit="hidden">
      <AnimatePresence mode="wait">
        {stage === 'js' && (
          <motion.div
            key="js"
            className="loader__text"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            JS
          </motion.div>
        )}
        {stage === 'name' && (
          <motion.div
            key="name"
            className="loader__text"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            JEBINSKARAN SAMLIN
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
