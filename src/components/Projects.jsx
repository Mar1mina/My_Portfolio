import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Projects</p>
        <h3>Selected work and portfolio concepts.</h3>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta">
              <span className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status}
              </span>
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((technology) => (
                <li key={`${project.title}-${technology}`}>{technology}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-small btn-secondary">
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
