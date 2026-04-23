import { useCounter } from '../hooks/useCounter';
import { heroBadges } from '../data/resumeData';
import StatPill from './StatPill';

export default function Hero() {
  // Three animated counters for the stat pills.
  // Each call to useCounter kicks off its own independent animation on mount.
  const yoe  = useCounter(8);
  const cert = useCounter(4);
  const tech = useCounter(30);

  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="live-dot" />
            Available for Senior Roles &amp; Consulting
          </div>
          <h1 className="hero-name">
            Aaron<br /><span className="accent">Daniels</span> Jr.
          </h1>
          <div className="hero-title">
            Sr. Application Systems Analyst &amp; Full-Stack Engineer
          </div>
          <p className="hero-desc">
            Data engineering leader with 8+ years bridging enterprise systems,
            cloud infrastructure, and front-end development. Currently pursuing
            an M.S. in MIS at Texas A&amp;M while driving analytics and
            automation at UTMB.
          </p>
          <div className="hero-badges">
            {heroBadges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>
          <div className="hero-cta">
            <a href="mailto:aaron.danielsm@gmail.com" className="btn btn-primary">
              📧 Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/aarondaniels2"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="headshot-frame">
            <div className="headshot-inner">
              <img
                src="public/headshot2.png"
                alt="Aaron Daniels Jr."
                className="headshot-img"
              />
            </div>
          </div>
          <div className="stat-pills">
            <StatPill value={`${yoe}+`}  label="Yrs Exp" />
            <StatPill value={cert}        label="Certs" />
            <StatPill value={`${tech}+`} label="Technologies" />
          </div>
        </div>
      </div>
    </section>
  );
}
