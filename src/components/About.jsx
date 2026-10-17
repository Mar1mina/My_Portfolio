import { profile } from '../data/profile';

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">About Me</p>
        <h3>Building practical skills for real-world problem solving.</h3>
      </div>
      <div className="about-panel">
        <p>{profile.intro}</p>
      </div>
    </section>
  );
}
