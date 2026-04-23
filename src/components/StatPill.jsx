/**
 * StatPill — small stat display used in the Hero section.
 * Props in, JSX out. No state. This is called a "presentational" component.
 */
export default function StatPill({ value, label }) {
  return (
    <div className="stat-pill">
      <div className="stat-pill-number">{value}</div>
      <div className="stat-pill-label">{label}</div>
    </div>
  );
}
