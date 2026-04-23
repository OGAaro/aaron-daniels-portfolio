import { interests } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

export default function Interests() {
  return (
    <section id="interests">
      <div className="container">
        <SectionHeader label="What I'm Into" title="Areas of" accent="Interest" />
        <div className="interests-grid">
          {interests.map(interest => (
            <FadeUp key={interest.label} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <div className="interest-label">{interest.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
