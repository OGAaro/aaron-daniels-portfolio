import FadeUp from './FadeUp';

/**
 * SectionHeader — consistent heading block used across every major section.
 * By centralizing this in one component, changing the header style later
 * means editing ONE file instead of six.
 */
export default function SectionHeader({ label, title, accent, subtitle }) {
  return (
    <FadeUp className="section-header">
      <div className="section-label">{label}</div>
      <h2 className="section-title">
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </FadeUp>
  );
}
