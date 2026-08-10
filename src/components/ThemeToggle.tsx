import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { FiMoon } from 'react-icons/fi';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label="Toggle light/dark theme"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme === 'dark' ? '#fff' : '#333',
        filter: theme === 'dark' ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <FiMoon size={22} fill={theme === 'dark' ? '#fff' : 'transparent'} />
    </button>
  );
};

export default ThemeToggle;
