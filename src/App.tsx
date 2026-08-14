import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import BackgroundEffects from './components/BackgroundEffects';
import './styles/global.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="app">
          <motion.div 
            className="scroll-progress" 
            style={{ 
              scaleX, 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              height: '2px', 
              background: 'var(--accent)', 
              transformOrigin: '0%', 
              zIndex: 9999 
            }} 
          />
          <BackgroundEffects />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
