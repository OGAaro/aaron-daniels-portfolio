import { useState, useRef, useEffect } from 'react';
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

  // Ref to the tab strip element — we need DOM access to scroll the active tab into view
  // when the user navigates via a pagination dot or swipe (since those don't auto-scroll
  // the tab strip the way clicking a tab directly would).
  const tabsRef = useRef(null);

  // Keep the active tab visible in the scrollable tab strip on mobile.
  // Runs whenever activeIndex changes.
  //
  // Note: we deliberately avoid scrollIntoView() here because it can scroll
  // ANY scrollable ancestor — including the whole page — to bring the tab
  // into view. Instead, we manually adjust only the tab strip's internal
  // horizontal scroll position, which can never affect the page's vertical scroll.
  useEffect(() => {
    const strip = tabsRef.current;
    if (!strip) return;
    const activeTab = strip.children[activeIndex];
    if (!activeTab) return;

    // Center the active tab within the visible portion of the strip.
    const stripWidth = strip.clientWidth;
    const tabCenter = activeTab.offsetLeft + (activeTab.clientWidth / 2);
    const targetScroll = tabCenter - (stripWidth / 2);

    strip.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }, [activeIndex]);

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
            <div className="project-tabs" role="tablist" ref={tabsRef}>
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

          {/* Pagination dots — mobile-only, hidden on desktop where all tabs fit.
              Dots are also tappable shortcuts to jump to that project. */}
          <div className="project-dots" role="tablist" aria-label="Project pagination">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`project-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to project ${i + 1}: ${p.shortLabel}`}
                aria-pressed={i === activeIndex}
              />
            ))}
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
