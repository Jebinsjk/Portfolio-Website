import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import SceneFrame from '../components/SceneFrame';
import SceneTitle from '../components/SceneTitle';
import { revealItem } from '../game/motion';
import { projects } from '../game/portfolioData';
import { SCENES } from '../game/scenes';

const ProjectsScene = () => (
  <SceneFrame scroll>
    <SceneTitle title={SCENES.projects.title} subtitle={SCENES.projects.subtitle} />

    <motion.div className="missions" variants={revealItem}>
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          className="mission"
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
        >
          <span className="mission__thumb">
            <img src={p.image} alt={p.title} loading="lazy" />
            <span className="mission__num">MISSION {String(i + 1).padStart(2, '0')}</span>
          </span>

          <span className="mission__head">
            <span className="mission__title">{p.title}</span>
            <FiPlus className="mission__plus" size={15} />
          </span>

          <span className="mission__more">
            <span className="mission__more-in">
              <span className="mission__fulltitle">{p.title}</span>
              <span className="mission__desc">{p.description}</span>
              <span className="mission__tags">
                {p.technologies.map((t) => (
                  <span className="mission__tag" key={t}>
                    {t}
                  </span>
                ))}
              </span>
              <span className="mission__go">
                VIEW PROJECT <FiArrowUpRight size={14} />
              </span>
            </span>
          </span>
        </motion.a>
      ))}
    </motion.div>
  </SceneFrame>
);

export default ProjectsScene;
