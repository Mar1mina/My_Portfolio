import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/profile';

export function Hero() {
  const githubLink = profile.github;
  const linkedinLink = profile.linkedin;

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I am</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p className="tagline">“{profile.tagline}”</p>
        <p className="supporting-text">
          I enjoy building practical solutions to real-world problems and continuously improving my technical
          skills.
        </p>

        <div className="button-row">
          <a href="#projects" className="btn btn-primary">
            View My Projects
            <FaArrowRight aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="mini-links" aria-label="Social links">
          <a href={githubLink} target="_blank" rel="noreferrer" aria-label="Visit Pawlos Yohannes on GitHub">
            <FaGithub />
            GitHub
          </a>
          {linkedinLink ? (
            <a href={linkedinLink} target="_blank" rel="noreferrer" aria-label="Visit Pawlos Yohannes on LinkedIn">
              <FaLinkedinIn />
              LinkedIn
            </a>
          ) : null}
        </div>

        {profile.cvAvailable ? (
          <a className="cv-link" href={profile.cvPath} download>
            <FaDownload aria-hidden="true" />
            Download CV
          </a>
        ) : (
          <div className="cv-note" aria-live="polite">
            <FaDownload aria-hidden="true" />
            CV is not available yet. Place the real PDF at <code>public/Pawlos-Yohannes-CV.pdf</code> to enable the download button.
          </div>
        )}
      </div>
    </section>
  );
}
