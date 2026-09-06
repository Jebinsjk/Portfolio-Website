# JK — Cinematic Game-Style Portfolio

A fullscreen, playable cinematic interface wrapping the professional portfolio of
**Jebinskaran Samlin** (Computer Science Engineer · Software Developer ·
Cybersecurity Enthusiast).

Not a scrolling site — one fullscreen game environment where every navigation
item is a different cinematic scene.

## Stack

- React 19 + Vite + TypeScript
- Framer Motion (scene transitions, camera drift, reveals)
- react-icons
- Plain CSS for the cinematic background/grain animations

## Structure

```
src/
  game/
    portfolioData.ts   real content (about, education, skills, experience, projects, certs, contact)
    scenes.ts          per-scene config: image, mood, objective, quote, camera pan
    motion.ts          shared Framer Motion presets
    game.css           the whole visual system
  components/
    GameMenu           persistent left vertical menu (+ mobile hamburger overlay)
    JKLogo             top-left branding
    SceneHUD           top-right HUD (live clock, ONLINE, level)
    ObjectivePanel     bottom-left mission tracker + animated graph
    CinematicQuote     bottom-right accent line
    CinematicBackground looping camera-drift background with colour grade + grain
    SceneFrame         shared scene enter/exit wrapper
    IntroSequence      START GAME cinematic montage
    MissionComplete    EXIT GAME ending sequence
    CustomCursor       desktop glowing cursor
    FilmGrain          fullscreen grain + scanlines
  scenes/
    HomeScene, AboutScene, EducationScene, SkillsScene,
    ExperienceScene, ProjectsScene, CertificationsScene, ContactScene
```

## Scripts

```bash
npm run dev       # local dev
npm run build     # typecheck + production build
npm run preview   # preview the build
```

Deploys to GitHub Pages via `.github/workflows` on push to `main`
(base path `/Portfolio-Website/`).

## Scene imagery

`public/scenes/` holds the compressed cinematic backgrounds. Swap a file in place
(keep the name) to change a scene's environment.
