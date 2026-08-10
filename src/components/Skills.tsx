import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { title: 'Programming Languages', data: skillsData.programmingLanguages },
    { title: 'Cybersecurity', data: skillsData.cybersecuritySkills },
    { title: 'Tools & Platforms', data: skillsData.cybersecurityTools },
    { title: 'Cloud & Networking', data: skillsData.networkingCloud },
  ];

  return (
    <section id="skills" style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          className="text-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          style={{ marginBottom: '4rem', color: 'var(--text-h)', textTransform: 'uppercase' }}
        >
          Technical <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)', WebkitTextFillColor: 'transparent' }}>Arsenal</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Tabs Navigation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                style={{ 
                  padding: '0.75rem 1.5rem', 
                  fontSize: '1.1rem', 
                  fontWeight: activeTab === i ? 700 : 500,
                  color: activeTab === i ? 'var(--text-h)' : 'var(--text)',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
                data-cursor="expand"
              >
                {cat.title}
                {activeTab === i && (
                  <motion.div 
                    layoutId="active-tab"
                    style={{ position: 'absolute', bottom: -17, left: 0, right: 0, height: '2px', background: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skill Clusters */}
          <div style={{ minHeight: '300px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignContent: 'flex-start' }}
              >
                {categories[activeTab].data.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                    whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 20px -10px rgba(20, 184, 166, 0.4)', borderColor: 'var(--accent)' }}
                    className="glass-panel"
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'var(--text-h)',
                      cursor: 'default',
                      border: '1px solid var(--glass-border)'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
