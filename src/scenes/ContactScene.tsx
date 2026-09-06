import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import SceneFrame from '../components/SceneFrame';
import { revealItem } from '../game/motion';
import { contact } from '../game/portfolioData';

const LINKS = [
  { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, ext: false },
  {
    icon: FiPhone,
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    ext: false,
  },
  { icon: FiGithub, label: 'GitHub', value: contact.githubHandle, href: contact.github, ext: true },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: contact.linkedinHandle,
    href: contact.linkedin,
    ext: true,
  },
];

const ContactScene = () => (
  <SceneFrame scroll>
    <motion.p className="scene__eyebrow" variants={revealItem}>
      START A CONVERSATION
    </motion.p>
    <h2 className="scene__title">
      <motion.span style={{ display: 'block' }} variants={revealItem}>
        {contact.heading}
      </motion.span>
      <motion.span className="stroke" style={{ display: 'block' }} variants={revealItem}>
        {contact.headingAccent}
      </motion.span>
    </h2>

    <motion.p className="scene__body" variants={revealItem}>
      {contact.blurb}
    </motion.p>

    <motion.div className="contact-btns" variants={revealItem}>
      {LINKS.map((l) => {
        const Icon = l.icon;
        return (
          <a
            key={l.label}
            className="contact-btn"
            href={l.href}
            {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span className="contact-btn__ico">
              <Icon size={17} />
            </span>
            <span className="contact-btn__text">
              <b>{l.label}</b>
              <span>{l.value}</span>
            </span>
            <FiArrowUpRight className="contact-btn__go" size={15} />
          </a>
        );
      })}
    </motion.div>
  </SceneFrame>
);

export default ContactScene;
