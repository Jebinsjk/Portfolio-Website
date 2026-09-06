import { asset } from '../utils/asset';

export type SceneId =
  | 'home'
  | 'about'
  | 'education'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'certifications'
  | 'contact';

export type MenuId = 'start' | SceneId | 'exit';

export interface SceneConfig {
  id: SceneId;
  /** menu label */
  label: string;
  /** big scene title */
  title: string;
  /** small subtitle under title */
  subtitle: string;
  /** cinematic background image */
  image: string;
  /** darker scene => heavier vignette */
  mood: 'bright' | 'sunset' | 'night';
  /** objective-panel mission text (bottom left) */
  objective: string;
  /** bottom-right cinematic accent line */
  quote: string;
  /** background camera drift direction */
  pan: 'left' | 'right' | 'in';
}

export const SCENES: Record<SceneId, SceneConfig> = {
  home: {
    id: 'home',
    label: 'START GAME',
    title: '',
    subtitle: '',
    image: asset('scenes/home.jpg'),
    mood: 'sunset',
    objective: 'BUILD NEXT-LEVEL\nDIGITAL EXPERIENCES',
    quote: 'BUILD DIFFERENT.\nSTAY LEGENDARY.',
    pan: 'left',
  },
  about: {
    id: 'about',
    label: 'ABOUT',
    title: 'ABOUT',
    subtitle: 'KNOW THE CREATOR',
    image: asset('scenes/portrait.jpg'),
    mood: 'sunset',
    objective: 'KNOW THE CREATOR',
    quote: 'CODE IS MY WEAPON.',
    pan: 'left',
  },
  education: {
    id: 'education',
    label: 'EDUCATION',
    title: 'EDUCATION',
    subtitle: 'MY ACADEMIC JOURNEY',
    image: asset('scenes/education.jpg'),
    mood: 'bright',
    objective: 'TRACE THE JOURNEY',
    quote: 'SAME ROAD.\nBIGGER DREAMS.',
    pan: 'in',
  },
  skills: {
    id: 'skills',
    label: 'SKILLS',
    title: 'SKILLS',
    subtitle: 'MY DIGITAL ARSENAL',
    image: asset('scenes/skills.jpg'),
    mood: 'night',
    objective: 'UPGRADE SKILL TREE',
    quote: 'CODE THE FUTURE.',
    pan: 'in',
  },
  experience: {
    id: 'experience',
    label: 'EXPERIENCE',
    title: 'EXPERIENCE',
    subtitle: 'A JOURNEY OF GROWTH',
    image: asset('scenes/experience.jpg'),
    mood: 'night',
    objective: 'REPLAY THE MISSIONS RUN',
    quote: 'HIGHER. FURTHER.\nSTRONGER.',
    pan: 'right',
  },
  projects: {
    id: 'projects',
    label: 'PROJECTS',
    title: 'PROJECTS',
    subtitle: 'REAL IDEAS. REAL IMPACT.',
    image: asset('scenes/projects.jpg'),
    mood: 'sunset',
    objective: 'COMPLETE MISSIONS',
    quote: 'TURNING IDEAS\nINTO REALITY.',
    pan: 'left',
  },
  certifications: {
    id: 'certifications',
    label: 'CERTIFICATIONS',
    title: 'CERTIFICATIONS',
    subtitle: 'LEARNING NEVER STOPS.',
    image: asset('scenes/projects.jpg'),
    mood: 'sunset',
    objective: 'UNLOCK ACHIEVEMENTS',
    quote: 'STAY CURIOUS.',
    pan: 'right',
  },
  contact: {
    id: 'contact',
    label: 'CONTACT',
    title: 'CONTACT',
    subtitle: "LET'S BUILD SOMETHING AMAZING.",
    image: asset('scenes/contact.jpg'),
    mood: 'sunset',
    objective: 'START A CONVERSATION',
    quote: 'GOOD IDEAS.\nBETTER CODE.',
    pan: 'in',
  },
};

export const MENU: { id: MenuId; label: string }[] = [
  { id: 'start', label: 'START GAME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'exit', label: 'EXIT GAME' },
];

/** Ordered images for the START GAME cinematic intro montage. */
export const INTRO_SHOTS: { image: string; label: string; caption: string }[] = [
  { image: asset('scenes/home.jpg'), label: 'SCENE 02 / 08', caption: 'A DIGITAL JOURNEY' },
  { image: asset('scenes/portrait.jpg'), label: 'SCENE 03 / 08', caption: 'JEBINSKARAN SAMLIN' },
  { image: asset('scenes/skills.jpg'), label: 'SCENE 04 / 08', caption: 'SKILL TREE · LOADING...' },
  { image: asset('scenes/education.jpg'), label: 'SCENE 05 / 08', caption: 'MOVING FORWARD' },
  { image: asset('scenes/experience.jpg'), label: 'SCENE 06 / 08', caption: 'INTO THE NIGHT' },
  { image: asset('scenes/projects.jpg'), label: 'SCENE 07 / 08', caption: 'CREATE. LEARN. BUILD.' },
  { image: asset('scenes/contact.jpg'), label: 'SCENE 08 / 08', caption: 'READY TO EXPLORE.' },
];
