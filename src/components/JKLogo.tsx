import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { asset } from '../utils/asset';

interface Props {
  onClick?: () => void;
}

/** Miami-sunset photo used to fill the "BYTE" letters (background-clip: text). */
const brandStyle = {
  '--brand-fill': `url("${asset('scenes/projects.jpg')}")`,
} as CSSProperties;

const JKLogo = ({ onClick }: Props) => (
  <motion.button
    className="jk-logo"
    onClick={onClick}
    aria-label="BYTE CITY — home"
    style={brandStyle}
    initial={{ opacity: 0, y: -14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    <span className="jk-logo__top">JK</span>
    <span className="jk-logo__sub">City</span>
  </motion.button>
);

export default JKLogo;
