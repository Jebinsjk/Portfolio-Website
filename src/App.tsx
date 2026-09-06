import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './game/game.css';
import { SCENES } from './game/scenes';
import type { MenuId, SceneId } from './game/scenes';

import FilmGrain from './components/FilmGrain';
import LoadingScreen from './components/LoadingScreen';
import IntroSequence from './components/IntroSequence';
import MissionComplete from './components/MissionComplete';
import CinematicBackground from './components/CinematicBackground';
import GameMenu from './components/GameMenu';
import JKLogo from './components/JKLogo';
import SceneHUD from './components/SceneHUD';
import CinematicQuote from './components/CinematicQuote';

import HomeScene from './scenes/HomeScene';
import AboutScene from './scenes/AboutScene';
import EducationScene from './scenes/EducationScene';
import SkillsScene from './scenes/SkillsScene';
import ExperienceScene from './scenes/ExperienceScene';
import ProjectsScene from './scenes/ProjectsScene';
import CertificationsScene from './scenes/CertificationsScene';
import ContactScene from './scenes/ContactScene';

type Mode = 'scene' | 'intro' | 'exit';

/** Preload scene imagery so transitions never pop. */
const preload = () => {
  Object.values(SCENES).forEach((s) => {
    const img = new Image();
    img.src = s.image;
  });
};

function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('scene');
  const [sceneId, setSceneId] = useState<SceneId>('home');
  const [flash, setFlash] = useState(0);

  useEffect(() => {
    preload();
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const goScene = (id: SceneId) => {
    setMode('scene');
    setSceneId(id);
    setFlash((f) => f + 1);
  };

  const handleSelect = (id: MenuId) => {
    if (id === 'start') {
      setFlash((f) => f + 1);
      setMode('intro');
    } else if (id === 'exit') {
      setFlash((f) => f + 1);
      setMode('exit');
    } else {
      goScene(id);
    }
  };

  const activeMenu: MenuId =
    mode === 'intro' ? 'start' : mode === 'exit' ? 'exit' : sceneId === 'home' ? 'start' : sceneId;

  const cfg = SCENES[sceneId];

  const renderScene = () => {
    switch (sceneId) {
      case 'home':
        return <HomeScene onNavigate={handleSelect} />;
      case 'about':
        return <AboutScene onNavigate={handleSelect} />;
      case 'education':
        return <EducationScene />;
      case 'skills':
        return <SkillsScene />;
      case 'experience':
        return <ExperienceScene />;
      case 'projects':
        return <ProjectsScene />;
      case 'certifications':
        return <CertificationsScene />;
      case 'contact':
        return <ContactScene />;
    }
  };

  return (
    <div className="stage">
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      {!loading && (
        <>
          {/* ---- Scene mode ---- */}
          {mode === 'scene' && (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={sceneId}
                  style={{ position: 'absolute', inset: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CinematicBackground scene={cfg} />
                  {renderScene()}
                </motion.div>
              </AnimatePresence>

              <div className="hud-layer">
                <div className="jk-logo-slot">
                  <JKLogo onClick={() => goScene('home')} />
                </div>
                <GameMenu active={activeMenu} onSelect={handleSelect} />
                <div className="hud-slot">
                  <SceneHUD sceneId={sceneId} />
                </div>
                <AnimatePresence mode="wait">
                  <CinematicQuote key={`q-${sceneId}`} quote={cfg.quote} />
                </AnimatePresence>
              </div>
            </>
          )}

          {/* ---- Intro montage ---- */}
          <AnimatePresence>
            {mode === 'intro' && (
              <IntroSequence key="intro" onDone={() => goScene('home')} />
            )}
          </AnimatePresence>

          {/* ---- Exit / mission complete ---- */}
          <AnimatePresence>
            {mode === 'exit' && (
              <MissionComplete key="exit" onRestart={() => goScene('home')} />
            )}
          </AnimatePresence>

          {/* ---- Cinematic transition flash ---- */}
          <AnimatePresence>
            <motion.div
              key={flash}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 55,
                pointerEvents: 'none',
                background:
                  'radial-gradient(120% 120% at 50% 50%, rgba(255,46,136,0.12), rgba(0,0,0,0.9))',
              }}
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </>
      )}

      <FilmGrain />
    </div>
  );
}

export default App;
