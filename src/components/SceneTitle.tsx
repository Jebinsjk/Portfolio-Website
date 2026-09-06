import { motion } from 'framer-motion';
import { revealItem } from '../game/motion';

interface Props {
  title: string;
  subtitle?: string;
}

const SceneTitle = ({ title, subtitle }: Props) => (
  <>
    <motion.h2 className="scene__title" variants={revealItem}>
      {title}
    </motion.h2>
    {subtitle ? (
      <motion.p className="scene__subtitle" variants={revealItem}>
        {subtitle}
      </motion.p>
    ) : null}
  </>
);

export default SceneTitle;
