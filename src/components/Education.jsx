import { education } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeader label="Academic Background" title="Education" />
        <div className="edu-grid">
          {education.map((edu, i) => (
            <FadeUp key={i} className="edu-card">
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-subloc">{edu.location}</div>
              <div className="edu-meta">
                {edu.chips.map((chip, j) => (
                  <span key={j} className={`edu-chip ${chip.gold ? 'gold' : ''}`}>
                    {chip.label}
                  </span>
                ))}
              </div>
              <div className="edu-watermark">{edu.watermark}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
