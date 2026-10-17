import { profile } from '../data/profile';

export function Education() {
  const { institution, program, studyPeriod, certificate } = profile.education;

  return (
    <section id="education" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Education</p>
        <h3>Academic background and learning journey.</h3>
      </div>

      <div className="education-card">
        <h4>{institution}</h4>
        <p>
          <strong>Program:</strong> {program}
        </p>
        <p>
          <strong>Study period:</strong> {studyPeriod}
        </p>
        <p>
          <strong>Certificate:</strong> {certificate}
        </p>
      </div>
    </section>
  );
}
