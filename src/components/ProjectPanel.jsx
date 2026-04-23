/**
 * ProjectPanel — the detail view for a single project.
 *
 * Notice the heavy use of conditional rendering ({condition && <UI />}).
 * Optional fields hide cleanly when empty — no broken layouts, no placeholders.
 * The image area uses a styled fallback to keep panel layout consistent across tabs.
 */
export default function ProjectPanel({ project }) {
  const statusConfig = {
    'live':            { label: 'Live',           color: 'var(--green)', dot: true  },
    'in-development':  { label: 'In Development', color: 'var(--gold)',  dot: true  },
    'shipped':         { label: 'Shipped',        color: 'var(--cyan)',  dot: false },
  };
  const status = statusConfig[project.status] || statusConfig['live'];

  return (
    <div className="project-panel" key={project.id}>
      {/* LEFT: image / diagram area */}
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} architecture`} />
        ) : (
          <div className="project-visual-placeholder">
            <div className="project-visual-icon">{project.categoryIcon}</div>
            <div className="project-visual-hint">Architecture diagram coming soon</div>
          </div>
        )}
        <div
          className="project-status-badge"
          style={{ color: status.color, borderColor: status.color }}
        >
          {status.dot && <span className="status-dot" style={{ background: status.color }} />}
          {status.label}
        </div>
      </div>

      {/* RIGHT: project details */}
      <div className="project-details">
        <div className="project-meta-top">
          <span className="project-category">{project.category}</span>
          <span className="project-meta-divider">·</span>
          <span className="project-org">{project.org}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-summary">{project.summary}</p>

        {project.impact && (
          <div className="project-impact">
            <span className="project-impact-icon">📈</span>
            <span className="project-impact-text">{project.impact}</span>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="project-section">
            <div className="project-section-label">Key Highlights</div>
            <ul className="project-highlights">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        )}

        <div className="project-footer">
          <div className="project-meta-row">
            <div>
              <div className="project-meta-label">Role</div>
              <div className="project-meta-value">{project.role}</div>
            </div>
            <div>
              <div className="project-meta-label">Period</div>
              <div className="project-meta-value">{project.year}</div>
            </div>
          </div>

          <div className="project-tech">
            {project.tech.map(t => (
              <span key={t} className="project-tech-pill">{t}</span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="project-links">
              {project.links.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
