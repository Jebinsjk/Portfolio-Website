import { asset } from '../utils/asset';

/**
 * All real portfolio content, preserved verbatim from the existing site
 * (https://jebinsjk.github.io/Portfolio-Website/). Only the presentation changes.
 */

export const profile = {
  firstName: 'JEBINSKARAN',
  lastName: 'SAMLIN',
  roleLine1: 'Software Developer',
  roleLine2: 'Cybersecurity Enthusiast',
  location: 'INDIA',
  buildYear: '2026',
  resume: asset('JebinsKaran__Resume.pdf'),
  portrait: asset('scenes/portrait.jpg'),
  tagline: '"I build software, explore cybersecurity, and work on emerging technologies."',
};

export const about = {
  heading: 'ABOUT',
  name: 'JEBINSKARAN SAMLIN',
  body: 'Computer Science Engineer specializing in Information Security with a strong foundation in software development, cybersecurity, networking, and computer systems. Skilled in Java, Python, Git, Linux, HTML, CSS, and security-focused tools. A quick learner with strong problem-solving, analytical thinking, communication, teamwork, adaptability, and collaboration skills. Passionate about software development, cybersecurity, emerging technologies, and building practical, reliable solutions while continuously learning and growing.',
};

export const education = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech Computer Science and Engineering',
    specialization: 'Information Security',
    period: '2022 — 2026',
  },
];

/**
 * Headline proficiency bars for the Skills scene. Labels are drawn from the real
 * skill set below; the percentages are self-assessed proficiency for the bar UI.
 */
export const skillBars: { label: string; value: number }[] = [
  { label: 'Java', value: 85 },
  { label: 'Python', value: 80 },
  { label: 'Git & GitHub', value: 80 },
  { label: 'Cybersecurity & Ethical Hacking', value: 78 },
  { label: 'Linux / Kali', value: 75 },
  { label: 'Networking · TCP/IP', value: 72 },
  { label: 'Web — HTML · CSS · JavaScript', value: 70 },
  { label: 'SQL', value: 65 },
];

export const skillsObjective = 'UPGRADE EVERY BRANCH\nOF THE SKILL TREE';

export interface SkillCategory {
  title: string;
  tag: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    tag: 'CORE',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Development',
    tag: 'BUILD',
    skills: [
      'Software Development',
      'Object-Oriented Programming',
      'Data Structures & Algorithms (Fundamentals)',
      'Git',
      'GitHub',
      'React',
      'REST APIs (fundamentals)',
      'Front-end development',
      'Debugging',
      'Problem solving',
      'Version control',
    ],
  },
  {
    title: 'Cybersecurity',
    tag: 'SECURE',
    skills: [
      'Cybersecurity Fundamentals',
      'Ethical Hacking',
      'Network Security',
      'Web Application Security',
      'Cryptography',
      'Vulnerability Assessment',
      'Digital Forensics',
      'Malware Analysis',
      'Steganography',
    ],
  },
  {
    title: 'Security Tools & Platforms',
    tag: 'ARSENAL',
    skills: [
      'Kali Linux',
      'Wireshark',
      'Metasploit',
      'SQLMap',
      'DVWA',
      'Nmap',
      'VirusTotal',
      'Cuckoo Sandbox',
      'FTK Imager',
      'Autopsy',
      'ProDiscover Investigator',
      'PEiD',
      'OllyDbg',
      'IDA Pro',
    ],
  },
  {
    title: 'Networking & Cloud',
    tag: 'CONNECT',
    skills: [
      'Networking fundamentals',
      'TCP/IP',
      'IP addressing',
      'CIDR',
      'NAT',
      'Elastic IP',
      'AWS',
      'AWS VPC',
      'AWS Transit Gateway',
      'Routers',
      'Network troubleshooting',
    ],
  },
  {
    title: 'Cryptography',
    tag: 'CIPHER',
    skills: [
      'AES',
      'DES',
      'RSA',
      'MD5',
      'SHA-512',
      'Hamming Codes',
      'Huffman Coding',
      'LZW',
      'Cryptographic fundamentals',
    ],
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Java Developer Intern',
    company: 'Icanio Technologies',
    period: '2025',
    summary:
      'Worked as a Java Developer Intern at Icanio Technologies, gaining hands-on exposure to software development and practical Java programming. Strengthened my understanding of Object-Oriented Programming, problem-solving, debugging, and writing structured, maintainable code. Worked with Git and GitHub as part of the development workflow and gained experience understanding how software tasks are approached, developed, tested, and improved in a professional environment.',
    highlights: [
      'Developed and strengthened practical Java programming skills.',
      'Applied Object-Oriented Programming (OOP) concepts to development tasks.',
      'Worked on debugging and problem-solving to identify and resolve issues.',
      'Used Git and GitHub for version control and managing development work.',
      'Gained exposure to a structured software development workflow.',
      'Improved understanding of writing clean, organized, and maintainable code.',
      'Gained practical experience working in a professional development environment.',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Email Security / Phishing Detection',
    description:
      'AI/ML system that analyses email content to detect phishing and suspicious messages with a user-friendly UI.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Flask', 'React'],
    link: 'https://github.com/Jebinsjk/Gmail-Phishing-Detector-v7',
    image: asset('scenes/proj-phishing.jpg'),
  },
  {
    title:
      'Composable Key Exchange Using Device-Independent Quantum Key Distribution and Post-Quantum Cryptography',
    description:
      'Research project implementing a hybrid key exchange protocol combining DI-QKD and PQC (ML-KEM-768) for composable security.',
    technologies: [
      'Quantum Cryptography',
      'Post-Quantum Cryptography',
      'ML-KEM-768',
      'Hybrid Key Exchange',
      'Security Proofs',
    ],
    link: 'https://github.com/Jebinsjk/Composable-Key-Exchange-Using-DI-QKD-AND-PQC',
    image: asset('scenes/proj-keyexchange.jpg'),
  },
  {
    title: 'Image-Based Data Hiding Using Steganography',
    description:
      'Implemented LSB, DCT, and DWT based steganography techniques for secure image data hiding and analysis.',
    technologies: ['Python', 'LSB', 'DCT', 'DWT', 'Image Processing', 'Steganalysis'],
    link: 'https://github.com/Jebinsjk/Image-Based-Data-Hiding-Using-LSB-DCT-DWT-with-Python',
    image: asset('scenes/proj-steg.jpg'),
  },
];

export interface Certification {
  title: string;
  provider: string;
  platform: string;
  year: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    title: 'Cyber Job Simulation',
    provider: 'Deloitte Australia',
    platform: 'Forage',
    year: '2026',
    link: asset('Deloitte Australia Cyber Job Simulation - Certificate .pdf'),
  },
  {
    title: 'Cybersecurity Professional Certificate',
    provider: 'Google',
    platform: 'Google',
    year: '2026',
    link: asset(' Google Cyber sec Certificate .pdf'),
  },
  {
    title: 'Introduction to Cyber Security',
    provider: 'Great Learning',
    platform: 'Great Learning',
    year: '2026',
    link: asset('Jebinskaran Samlin cyber sec.pdf'),
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    provider: 'Great Learning',
    platform: 'Great Learning',
    year: '2026',
    link: asset('Jebinskaran Samlin- AI prompt certificate .pdf'),
  },
];

export const contact = {
  heading: 'LET’S BUILD',
  headingAccent: 'SOMETHING AMAZING.',
  blurb:
    "Open to new roles, collaborations, and ideas worth building. Whether it's an opportunity, a project, or just a hello — drop a message and I'll get right back to you.",
  email: 'jebinskaransamlin@gmail.com',
  phone: '+91 9677941096',
  whatsapp: 'https://wa.me/919677941096',
  github: 'https://github.com/Jebinsjk',
  githubHandle: 'github.com/Jebinsjk',
  linkedin: 'https://www.linkedin.com/in/jebinskaran-samlin/',
  linkedinHandle: 'linkedin.com/in/jebinskaran-samlin',
};
