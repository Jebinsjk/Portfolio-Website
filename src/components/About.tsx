import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InteractivePortrait from './InteractivePortrait';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax for the whole section content
  const ySection = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      style={{ position: 'relative', padding: '10rem 0', overflow: 'hidden' }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ y: ySection, opacity }}
          // Single centered column: portrait → heading → paragraph
          className="about-inner"
        >
          {/* ── 1. Profile photo centered above heading ── */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <InteractivePortrait />
          </div>

          {/* ── 2. "A LITTLE / ABOUT ME" heading ── */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ overflow: 'hidden', paddingBottom: '8px' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-section-title"
                style={{ color: 'var(--text-h)', textTransform: 'uppercase', margin: 0 }}
              >
                A Little
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '8px', marginTop: '-0.15em' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-section-title"
                style={{ margin: 0 }}
              >
                <span
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px var(--text-h)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About Me
                </span>
              </motion.h2>
            </div>

            {/* Teal accent line — centered */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'circOut' }}
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                }}
              />
            </div>
          </div>

          {/* ── 3. About paragraph ── */}
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <motion.p
              style={{
                fontSize: '1.35rem',
                color: 'var(--text-h)',
                marginBottom: '0',
                lineHeight: '1.85',
                fontWeight: 300,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35em',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-80px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.3 },
                },
              }}
            >
              {'Computer Science Engineer specializing in Information Security with a strong foundation in software development, cybersecurity, networking, and computer systems. Skilled in Java, Python, Git, Linux, HTML, CSS, and security-focused tools. A quick learner with strong problem-solving, analytical thinking, communication, teamwork, adaptability, and collaboration skills. Passionate about software development, cybersecurity, emerging technologies, and building practical, reliable solutions while continuously learning and growing.'
                .split(' ')
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
