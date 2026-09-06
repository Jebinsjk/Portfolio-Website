import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SceneFrame from '../components/SceneFrame';
import { revealItem } from '../game/motion';
import { profile } from '../game/portfolioData';
import type { MenuId } from '../game/scenes';

interface Props {
  onNavigate: (id: MenuId) => void;
}

const HomeScene = ({ onNavigate }: Props) => (
  <SceneFrame>
    <h1 className="home__title">
      <motion.span style={{ display: 'block' }} variants={revealItem}>
        {profile.firstName}
      </motion.span>
      <motion.span className="l2" style={{ display: 'block' }} variants={revealItem}>
        {profile.lastName}
      </motion.span>
    </h1>

    <motion.div className="home__roles" variants={revealItem}>
      {profile.roleLine1}
      <br />
      {profile.roleLine2}
    </motion.div>

    <motion.div className="cta-row" variants={revealItem}>
      <button className="cta cta--primary" onClick={() => onNavigate('start')}>
        START GAME <FiArrowRight size={15} />
      </button>
      <button className="cta cta--ghost" onClick={() => onNavigate('projects')}>
        VIEW PROJECTS <FiArrowRight size={15} />
      </button>
    </motion.div>
  </SceneFrame>
);

export default HomeScene;
