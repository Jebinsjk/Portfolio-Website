import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SceneFrame from '../components/SceneFrame';
import SceneTitle from '../components/SceneTitle';
import RunningText from '../components/RunningText';
import { revealItem } from '../game/motion';
import { about, profile } from '../game/portfolioData';
import { SCENES } from '../game/scenes';
import type { MenuId } from '../game/scenes';

interface Props {
  onNavigate: (id: MenuId) => void;
}

const AboutScene = ({ onNavigate }: Props) => (
  <SceneFrame>
    <SceneTitle title={SCENES.about.title} />
    <motion.p
      className="scene__subtitle"
      style={{ color: 'var(--pink-2)', letterSpacing: '0.14em', marginTop: 10 }}
      variants={revealItem}
    >
      {about.name}
    </motion.p>

    <RunningText className="scene__body" text={about.body} startDelay={0.35} />

    <motion.div className="cta-row" variants={revealItem}>
      <a className="cta cta--primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
        VIEW RESUME <FiArrowRight size={15} />
      </a>
      <button className="cta cta--ghost" onClick={() => onNavigate('skills')}>
        SEE SKILLS <FiArrowRight size={15} />
      </button>
    </motion.div>
  </SceneFrame>
);

export default AboutScene;
