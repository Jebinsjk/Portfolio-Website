import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import projectsData from '../data/projects.json';
import { asset } from '../utils/asset';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={cardRef}
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '4rem', 
        alignItems: 'center',
        marginBottom: '15rem',
        direction: isEven ? 'ltr' : 'rtl'
      }}
    >
      <motion.a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          position: 'relative', 
          borderRadius: '24px', 
          overflow: 'hidden', 
          display: 'block', 
          direction: 'ltr',
          perspective: 1000
        }}
        data-cursor="text:VIEW"
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ 
            width: '100%', 
            paddingTop: '75%', 
            position: 'relative', 
            overflow: 'hidden',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          initial={{ clipPath: 'inset(20% 20% 20% 20% round 24px)', scale: 0.96 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 24px)', scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img 
            src={asset(project.image)}
            alt={project.title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', scale: scaleImg }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = ''; 
              (e.target as HTMLImageElement).style.background = 'var(--code-bg)';
            }}
          />
          <motion.div 
            variants={{
              hover: { opacity: 1 }
            }}
            initial={{ opacity: 0 }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', transition: 'opacity 0.4s ease' }}
          />
        </motion.div>
      </motion.a>

      <motion.div 
        style={{ direction: 'ltr', padding: '2rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
          0{index + 1}
        </motion.p>
        <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--text-h)', lineHeight: '1.1', fontWeight: 700, letterSpacing: '-0.02em' }}>
          {project.title}
        </motion.h3>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text)', lineHeight: '1.7' }}>
          {project.description}
        </motion.p>
        
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {project.technologies.map((tech: string, i: number) => (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              style={{ fontSize: '0.9rem', background: 'transparent', color: 'var(--text-h)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid var(--border)', fontFamily: 'var(--mono)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '10rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-section-title"
          style={{ marginBottom: '8rem', color: 'var(--text-h)', textTransform: 'uppercase', textAlign: 'center' }}
        >
          Selected <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--accent)', WebkitTextFillColor: 'transparent' }}>Projects</span>
        </motion.h2>
        
        <div>
          {projectsData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
