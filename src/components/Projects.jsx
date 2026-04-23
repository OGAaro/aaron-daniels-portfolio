import { useState, useRef } from 'react';
import { projects } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';
import ProjectTab from './ProjectTab';
import ProjectPanel from './ProjectPanel';

export default function Projects() {
  // Manual click-only navigation. The active project index is the only state we need.
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  // Touch state for swipe detection on mobile.
  // useRef stores values without triggering re-renders — perfect for tracking
  // gesture coordinates that don't need to be reflected in the UI.
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50; // pixels
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      // Swipe right → previous, swipe left → next
      const next = deltaX > 0
        ? (activeIndex - 1 + projects.length) % projects.length
        : (activeIndex + 1) % projects.length;
      setActiveIndex(next);
    }
    touchStartX.current = null;
  };

  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          label="Featured Work"
          title="Selected"
          accent="Projects"
          subtitle="Click any tab to explore"
        />

        <FadeUp className="projects-showcase">
          {/* Tab strip */}
          <div className="project-tabs-wrap">
            <div className="project-tabs" role="tablist">
              {projects.map((p, i) => (
                <ProjectTab
                  key={p.id}
                  project={p}
                  index={i}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* The active panel — swipe-aware on touch */}
          <div
            className="project-panel-wrap"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <ProjectPanel project={activeProject} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
