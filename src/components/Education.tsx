import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.03, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(8rem, 25vw, 30rem)', fontWeight: 900, color: 'var(--text-h)', lineHeight: 0.8, pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0 }}
          >
            2026
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.8, 
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                } 
              }
            }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(20,184,166, 0.2)' }}
            className="glass-panel"
            style={{ position: 'relative', zIndex: 1, padding: '4rem', borderRadius: '32px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', border: '1px solid var(--glass-border)', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '1.2rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2rem', fontWeight: 600 }}>Education</motion.h2>
            <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-h)', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.1 }}>
              Vellore Institute of Technology
            </motion.h3>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '1.5rem', color: 'var(--text)', marginBottom: '1rem', fontWeight: 300 }}>
              B.Tech Computer Science and Engineering
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <span style={{ background: 'var(--code-bg)', color: 'var(--text-h)', padding: '0.5rem 1.5rem', borderRadius: '50px', fontSize: '1rem', fontFamily: 'var(--mono)', border: '1px solid var(--border)' }}>
                Specialization: Information Security
              </span>
              <span style={{ background: 'var(--code-bg)', color: 'var(--text-h)', padding: '0.5rem 1.5rem', borderRadius: '50px', fontSize: '1rem', fontFamily: 'var(--mono)', border: '1px solid var(--border)' }}>
                Graduation: 2026
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
