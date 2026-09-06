import { motion } from 'framer-motion';
import SceneFrame from '../components/SceneFrame';
import { revealItem } from '../game/motion';
import { skillBars, skillsObjective } from '../game/portfolioData';

const SkillsScene = () => (
  <SceneFrame scroll>
    <motion.div className="skills-head" variants={revealItem}>
      <h2 className="scene__title">SKILLS</h2>
      <span className="skills-unlocked">Unlocked</span>
    </motion.div>

    <motion.div className="skillbars" variants={revealItem}>
      {skillBars.map((s, i) => (
        <motion.div
          className="skillbar"
          key={s.label}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="skillbar__name">{s.label}</span>
          <span className="skillbar__track">
            <motion.span
              className="skillbar__fill"
              initial={{ width: '0%' }}
              animate={{ width: `${s.value}%` }}
              transition={{ duration: 1.1, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
          <motion.span
            className="skillbar__pct"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.09 }}
          >
            {s.value}%
          </motion.span>
        </motion.div>
      ))}
    </motion.div>

    <motion.aside
      className="skills-objective"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="skills-objective__k">CURRENT OBJECTIVE</div>
      <div className="skills-objective__v">{skillsObjective}</div>
      <svg className="skills-objective__map" viewBox="0 0 96 58" aria-hidden>
        {[12, 24, 36, 48].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="96" y2={y} stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
        ))}
        {[16, 32, 48, 64, 80].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="58" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
        ))}
        <path
          d="M6,50 L26,40 L40,44 L58,22 L78,14"
          fill="none"
          stroke="var(--orange)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="78" cy="14" r="2.6" fill="#fff" style={{ filter: 'drop-shadow(0 0 4px var(--orange))' }} />
        <circle cx="6" cy="50" r="2" fill="var(--pink-2)" />
      </svg>
    </motion.aside>
  </SceneFrame>
);

export default SkillsScene;
