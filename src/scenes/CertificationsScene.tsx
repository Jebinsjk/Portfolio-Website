import { motion } from 'framer-motion';
import { FiAward, FiArrowUpRight } from 'react-icons/fi';
import SceneFrame from '../components/SceneFrame';
import SceneTitle from '../components/SceneTitle';
import { revealItem } from '../game/motion';
import { certifications } from '../game/portfolioData';
import { SCENES } from '../game/scenes';

const CertificationsScene = () => (
  <SceneFrame scroll>
    <SceneTitle title={SCENES.certifications.title} subtitle={SCENES.certifications.subtitle} />

    <motion.div className="certs" variants={revealItem}>
      {certifications.map((c, i) => (
        <motion.a
          key={c.title}
          className="cert"
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 + i * 0.09 }}
        >
          <span className="cert__badge">
            <FiAward size={16} />
          </span>
          <span className="cert__title">{c.title}</span>
          <span className="cert__org">{c.provider}</span>
          <span className="cert__foot">
            <span>{c.platform} · {c.year}</span>
            <FiArrowUpRight size={13} />
          </span>
        </motion.a>
      ))}
    </motion.div>
  </SceneFrame>
);

export default CertificationsScene;
