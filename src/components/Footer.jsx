import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/profile';

export function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name">{profile.name}</p>
        <p className="footer-description">{profile.shortDescription}</p>
      </div>

      <div className="footer-links" aria-label="Footer social media links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Visit Pawlos Yohannes on GitHub">
          <FaGithub />
          GitHub
        </a>
        {profile.linkedin ? (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Pawlos Yohannes on LinkedIn">
            <FaLinkedinIn />
            LinkedIn
          </a>
        ) : null}
        <a href={`mailto:${profile.email}`} aria-label="Email Pawlos Yohannes">
          <FaEnvelope />
          Email
        </a>
      </div>

      <p className="copyright">© {currentYear} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
