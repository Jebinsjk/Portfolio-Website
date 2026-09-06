import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { MENU } from '../game/scenes';
import type { MenuId } from '../game/scenes';

interface Props {
  active: MenuId;
  onSelect: (id: MenuId) => void;
}

const GameMenu = ({ active, onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  const pick = (id: MenuId) => {
    setOpen(false);
    onSelect(id);
  };

  return (
    <>
      <button
        className="menu-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>

      <nav className={`game-menu ${open ? '' : 'is-closed'}`} aria-label="Game menu">
        {MENU.map((m, i) => {
          const isActive = m.id === active;
          return (
            <motion.button
              key={m.id}
              className={`menu-item ${isActive ? 'is-active' : ''} ${m.id === 'exit' ? 'is-exit' : ''}`}
              onClick={() => pick(m.id)}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{m.label}</span>
              <FiChevronRight className="menu-item__arrow" size={14} />
            </motion.button>
          );
        })}
      </nav>
    </>
  );
};

export default GameMenu;
