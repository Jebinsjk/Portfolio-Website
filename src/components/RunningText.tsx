import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  /** seconds before the first word appears */
  startDelay?: number;
  /** seconds between each word */
  stagger?: number;
}

/**
 * "Running" text reveal — the paragraph streams in word by word
 * (soft blur → clear, slight rise). Used for the About bio and the
 * Experience summary.
 */
const RunningText = ({ text, className, startDelay = 0.15, stagger = 0.026 }: Props) => {
  const words = text.split(' ');
  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: startDelay } },
      }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          variants={{
            hidden: { opacity: 0, y: '0.55em', filter: 'blur(6px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {i < words.length - 1 ? `${w} ` : w}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default RunningText;
