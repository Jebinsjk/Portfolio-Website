import { motion } from 'framer-motion';
import SceneFrame from '../components/SceneFrame';
import SceneTitle from '../components/SceneTitle';
import { revealItem } from '../game/motion';
import { education } from '../game/portfolioData';
import { SCENES } from '../game/scenes';

const EducationScene = () => (
  <SceneFrame>
    <SceneTitle title={SCENES.education.title} subtitle={SCENES.education.subtitle} />

    {education.map((e) => (
      <motion.div className="edu-card" key={e.institution} variants={revealItem}>
        <div className="edu-card__top">
          <span className="edu-badge">VIT</span>
          <span className="edu-card__head">
            <span className="edu-card__inst">{e.institution}</span>
            <span className="edu-card__degree">{e.degree}</span>
          </span>
        </div>
        <div className="edu-stats">
          <span className="edu-stat">
            <b>SPECIALIZATION</b>
            <span>{e.specialization}</span>
          </span>
          <span className="edu-stat">
            <b>PERIOD</b>
            <span>{e.period}</span>
          </span>
        </div>
      </motion.div>
    ))}
  </SceneFrame>
);

export default EducationScene;
