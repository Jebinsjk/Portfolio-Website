import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import ThemeToggle from './ThemeToggle';

const sections = [
  { id: 'about', label: 'ABOUT' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container container">
        <nav className={`navbar__nav ${mobileOpen ? 'open' : ''}`}>
          <ul>
            {sections.map((sec) => (
              <li key={sec.id} onClick={closeMenu}>
                <ScrollLink
                  activeClass="active"
                  spy={true}
                  to={sec.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onSetActive={() => setActiveSection(sec.id)}
                >
                  {sec.label}
                  {activeSection === sec.id && (
                    <motion.div
                      layoutId="navbar-underline"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(20, 184, 166, 0.8)'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
            <li className="navbar__theme">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Menu">
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
