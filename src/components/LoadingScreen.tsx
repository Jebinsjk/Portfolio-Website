import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    <div>
      <motion.div
        className="loader__jk"
        initial={{ opacity: 0, letterSpacing: '0.4em' }}
        animate={{ opacity: 1, letterSpacing: '0.1em' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        JK
      </motion.div>
      <div className="loader__bar">
        <motion.i
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </div>
      <div className="loader__txt">LOADING EXPERIENCE — INITIALIZING</div>
    </div>
  </motion.div>
);

export default LoadingScreen;
