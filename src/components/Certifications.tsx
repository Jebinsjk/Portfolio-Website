import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certificationsData = [
    { title: 'Cyber Job Simulation', provider: 'Deloitte Australia', platform: 'Forage', year: '2026', link: '/Deloitte Australia Cyber Job Simulation - Certificate .pdf' },
    { title: 'Cybersecurity Professional Certificate', provider: 'Google', platform: 'Google', year: '2026', link: '/ Google Cyber sec Certificate .pdf' },
    { title: 'Introduction to Cyber Security', provider: 'Great Learning', platform: 'Great Learning', year: '2026', link: '/Jebinskaran Samlin cyber sec.pdf' },
    { title: 'Prompt Engineering for ChatGPT', provider: 'Great Learning', platform: 'Great Learning', year: '2026', link: '/Jebinskaran Samlin- AI prompt certificate .pdf' }
  ];

  return (
    <section id="certifications" style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-section-title"
          style={{ marginBottom: '6rem', color: 'var(--text-h)', textTransform: 'uppercase' }}
        >
          My <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)', WebkitTextFillColor: 'transparent' }}>Certifications</span>
        </motion.h2>
        
        <motion.div 
          className="certifications-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
        >
          
          {certificationsData.map((cert, i) => (
            <motion.a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="glass-panel" 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              data-cursor="text:VIEW"
              style={{ 
                padding: '2.5rem', 
                borderRadius: '20px', 
                position: 'relative', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                textDecoration: 'none',
                height: '100%'
              }}
            >
              {/* Subtle hover gradient background */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, var(--accent-bg) 0%, transparent 70%)', zIndex: 0 }}
              />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-h)', marginBottom: '0.5rem', lineHeight: '1.3', fontWeight: 600 }}>{cert.title}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '2rem' }}>{cert.provider}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <p style={{ color: 'var(--text)', fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>{cert.platform}</p>
                  <p style={{ color: 'var(--text-h)', fontSize: '0.85rem', fontFamily: 'var(--mono)', background: 'var(--code-bg)', padding: '0.3rem 0.8rem', borderRadius: '50px', margin: 0 }}>{cert.year}</p>
                </div>
              </div>
            </motion.a>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
