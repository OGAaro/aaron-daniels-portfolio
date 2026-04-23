/**
 * ProjectTab — a single tab button in the projects showcase strip.
 *
 * This is a "controlled" component — it doesn't own state itself.
 * The parent (Projects) tells it whether it's active and what to do on click.
 * That's the React pattern: state lives in ONE place, handlers flow down.
 */
export default function ProjectTab({ project, index, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`project-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span className="project-tab-num">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="project-tab-icon">{project.categoryIcon}</span>
      <span className="project-tab-label">{project.shortLabel}</span>
    </button>
  );
}
