import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '15rem 0 10rem', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Massive Typography Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          style={{ marginBottom: '6rem' }}
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(20px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
            }}
            className="text-hero"
            style={{ color: 'var(--text-h)', margin: 0 }}
          >
            LET'S BUILD
          </motion.h2>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(20px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
            }}
            className="text-hero"
            style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-h)', WebkitTextFillColor: 'transparent', margin: 0 }}
          >
            SOMETHING
          </motion.h2>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(20px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
            }}
            className="text-hero"
            style={{ color: 'var(--accent)', margin: 0 }}
          >
            MEANINGFUL.
          </motion.h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ color: 'var(--text)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.8', fontSize: '1.4rem', fontWeight: 300 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.8 } }
          }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}
        >
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="tel:+919677941096" className="contact-link glass-panel" style={linkStyle} data-cursor="expand">
            <FiPhone size={24} />
            <span>+91 9677941096</span>
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="https://wa.me/919677941096" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel" style={linkStyle} data-cursor="expand">
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="mailto:jebinskaransamlin@gmail.com" className="contact-link glass-panel" style={linkStyle} data-cursor="expand">
            <FiMail size={24} />
            <span>Email Me</span>
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="https://www.linkedin.com/in/jebinskaran-samlin/" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel" style={linkStyle} data-cursor="expand">
            <FiLinkedin size={24} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="https://github.com/Jebinsjk" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel" style={linkStyle} data-cursor="expand">
            <FiGithub size={24} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const linkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem 2rem',
  color: 'var(--text-h)',
  textDecoration: 'none',
  borderRadius: '16px',
  fontWeight: '600',
  fontSize: '1.15rem',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
};

export default Contact;
