import { useState } from 'react';
import FadeUp from './FadeUp';

/**
 * TimelineItem — a single job card with its own expand/collapse state.
 *
 * Why does state live HERE and not in the parent Experience component?
 * Because only THIS card cares about whether it's expanded. Its siblings
 * don't need to know. In React, state should live at the lowest level
 * that needs it — a principle sometimes called "colocation."
 *
 * If later you want "only one card open at a time," you'd lift this state
 * up to <Experience> and pass `isActive` and `onToggle` down as props.
 */
export default function TimelineItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeUp
      className={`timeline-item ${expanded ? 'active' : ''}`}
      onClick={() => setExpanded(prev => !prev)}
    >
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-location">📍 {item.location}</div>
          </div>
          <div className="timeline-period">{item.period}</div>
        </div>

        {/* Conditional rendering — only show bullets when expanded.
            The `&&` pattern: if left side is truthy, render the right side. */}
        {expanded && (
          <ul className="timeline-bullets">
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}

        <div className="toggle-hint">
          <span className="toggle-icon">›</span>
          {expanded ? 'CLICK TO COLLAPSE' : 'CLICK TO EXPAND'}
        </div>
      </div>
    </FadeUp>
  );
}
