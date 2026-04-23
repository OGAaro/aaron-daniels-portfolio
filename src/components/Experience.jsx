import { experience } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeader
          label="Career Journey"
          title="Work"
          accent="Experience"
          subtitle="Click any role to expand full responsibilities"
        />
        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
