import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { asset } from '../utils/asset';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="experience" style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          className="text-section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          style={{ marginBottom: '6rem', color: 'var(--text-h)', textTransform: 'uppercase' }}
        >
          Professional <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)', WebkitTextFillColor: 'transparent' }}>Experience</span>
        </motion.h2>
        
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4rem', paddingLeft: '3rem', maxWidth: '900px' }}>
          
          {/* Animated Timeline Line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }}>
            <motion.div 
              style={{ 
                position: 'absolute', 
                top: 0, left: 0, width: '100%', 
                height: '100%',
                background: 'var(--accent)', 
                scaleY: lineScale,
                transformOrigin: 'top'
              }} 
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: 'relative' }}
          >
            {/* Animated Node */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              style={{ position: 'absolute', width: '20px', height: '20px', background: 'var(--bg)', borderRadius: '50%', left: '-3.65rem', top: '8px', border: '2px solid var(--accent)' }}
            >
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '100%', height: '100%', background: 'var(--accent)', borderRadius: '50%', opacity: 0.5 }}
              />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
              }}
              className="glass-panel" 
              style={{ padding: '3rem', borderRadius: '24px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--text-h)', marginBottom: '0.5rem', fontWeight: 700 }}>Java Development Intern</h3>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: '500' }}>Icanio Technologies</h4>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', color: 'var(--text)', background: 'var(--code-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--border)' }}>
                  2025
                </motion.div>
              </div>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ color: 'var(--text)', lineHeight: '1.8', fontSize: '1.15rem', marginBottom: '2rem', fontWeight: 300 }}>
                Worked as a Java Development Intern at Icanio Technologies, gaining hands-on exposure to software development and practical Java programming. Strengthened my understanding of Object-Oriented Programming, problem-solving, debugging, and writing structured, maintainable code. Worked with Git and GitHub as part of the development workflow and gained experience understanding how software tasks are approached, developed, tested, and improved in a professional environment.
              </motion.p>
              
              <motion.h5 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ color: 'var(--text-h)', fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Highlights</motion.h5>
              <motion.ul variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ color: 'var(--text)', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '1.5rem', listStyleType: 'circle', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem' }}>
                <li>Developed and strengthened practical Java programming skills.</li>
                <li>Applied Object-Oriented Programming (OOP) concepts to development tasks.</li>
                <li>Worked on debugging and problem-solving to identify and resolve issues.</li>
                <li>Used Git and GitHub for version control and managing development work.</li>
                <li>Gained exposure to a structured software development workflow.</li>
                <li>Improved understanding of writing clean, organized, and maintainable code.</li>
                <li>Gained practical experience working in a professional development environment.</li>
              </motion.ul>

              {/* Dynamic Internship Picture */}
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }} style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg)' }}>
                <motion.div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  scale: useTransform(lineScale, [0, 1], [0.95, 1.05]),
                  y: useTransform(lineScale, [0, 1], [-10, 10]),
                  filter: useTransform(lineScale, [0, 0.5, 1], ['grayscale(100%)', 'grayscale(0%)', 'grayscale(0%)']),
                }}>
                  <img 
                    src={asset('Intership ID - Card.png')} 
                    alt="Internship ID Card" 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </motion.div>
                {/* Overlay for cinematic effect */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)', zIndex: 1, opacity: 0.5, pointerEvents: 'none' }} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
