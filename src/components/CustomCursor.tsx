import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<'default' | 'expand' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (!window.matchMedia('(pointer: fine)').matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorAttr) {
        if (cursorAttr === 'expand') {
          setVariant('expand');
          setCursorText('');
        } else if (cursorAttr.startsWith('text:')) {
          setVariant('text');
          setCursorText(cursorAttr.split(':')[1].toUpperCase());
        } else {
          setVariant('text');
          setCursorText(cursorAttr.toUpperCase());
        }
      } else if (target.closest('a') || target.closest('button')) {
        setVariant('expand');
        setCursorText('');
      } else {
        setVariant('default');
        setCursorText('');
      }
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If we are leaving a custom cursor element and not entering another, reset
      if (target.closest('[data-cursor]') || target.closest('a') || target.closest('button')) {
        // We will rely on mouseenter to set the correct state for the new element
        setTimeout(() => {
           const hoveredEls = document.querySelectorAll(':hover');
           const lastHovered = hoveredEls[hoveredEls.length - 1];
           if (!lastHovered?.closest('[data-cursor]') && !lastHovered?.closest('a') && !lastHovered?.closest('button')) {
             setVariant('default');
             setCursorText('');
           }
        }, 10);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: { x: position.x - 8, y: position.y - 8, width: 16, height: 16, backgroundColor: 'var(--accent)', opacity: 0.5, border: '0px solid transparent' },
    expand: { x: position.x - 24, y: position.y - 24, width: 48, height: 48, backgroundColor: 'var(--accent)', opacity: 0.15, border: '0px solid transparent' },
    text: { x: position.x - 40, y: position.y - 40, width: 80, height: 80, backgroundColor: 'var(--glass-bg)', opacity: 1, border: '1px solid var(--glass-border)', backdropFilter: 'blur(4px)' }
  };

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{ x: position.x - 3, y: position.y - 3 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--text-h)',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={variant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-h)',
          boxShadow: variant === 'text' ? 'var(--shadow)' : 'none'
        }}
      >
        {variant === 'text' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '1px', fontFamily: 'var(--sans)' }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
