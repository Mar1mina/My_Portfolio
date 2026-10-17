import {
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { skillSections } from '../data/skills';

const iconMap = {
  python: FaPython,
  javascript: FaJsSquare,
  git: FaGitAlt,
  github: FaGithub,
  chart: FaChartLine,
  html5: FaHtml5,
  css3: FaCss3Alt,
  react: FaReact,
  vite: FaCode,
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Skills &amp; Technologies</p>
        <h3>Focused on learning, building, and solving meaningful problems.</h3>
      </div>

      <div className="skills-grid">
        {skillSections.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <ul className="skill-list">
              {group.items.map((skill) => {
                const Icon = iconMap[skill.icon] || FaChartLine;

                return (
                  <li key={`${group.title}-${skill.name}`}>
                    <span className="skill-badge" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
