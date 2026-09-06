import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SceneFrame from '../components/SceneFrame';
import SceneTitle from '../components/SceneTitle';
import { revealItem, EASE_OUT } from '../game/motion';
import { experience } from '../game/portfolioData';
import { SCENES } from '../game/scenes';

/** Each line eases in from the left, blur → sharp. */
const LINE: Variants = {
  hidden: { opacity: 0, x: -24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

const GROUP: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const LIST: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const ExperienceScene = () => (
  <SceneFrame scroll>
    <SceneTitle title={SCENES.experience.title} subtitle={SCENES.experience.subtitle} />

    <motion.div className="timeline" variants={revealItem}>
      {experience.map((x) => (
        <motion.div
          className="tl-item"
          key={x.company}
          variants={GROUP}
          initial="hidden"
          animate="show"
        >
          <motion.div className="tl-role" variants={LINE}>
            {x.role}
          </motion.div>
          <motion.div className="tl-co" variants={LINE}>
            {x.company} <span>{x.period}</span>
          </motion.div>

          <motion.p className="tl-summary" variants={LINE}>
            {x.summary}
          </motion.p>

          <motion.ul className="tl-hl" variants={LIST}>
            {x.highlights.map((h) => (
              <motion.li key={h} variants={LINE}>
                {h}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  </SceneFrame>
);

export default ExperienceScene;
