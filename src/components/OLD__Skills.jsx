import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
} from 'recharts';
import { skillCategories, radarData, proficiencies } from '../data/resumeData';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

export default function Skills() {
  // We use useInView directly here (not FadeUp) because we need the
  // inView state to drive the proficiency bar widths, not just a CSS class.
  const [barsRef, barsInView] = useInView();

  return (
    <section id="skills">
      <div className="container">
        <SectionHeader
          label="Technical Arsenal"
          title="Skills &amp;"
          accent="Technologies"
        />

        <div className="skills-layout">
          {/* LEFT: categorized skill pills */}
          <div>
            {skillCategories.map(cat => (
              <FadeUp key={cat.label} className="skill-category">
                <div className="skill-cat-label">{cat.label}</div>
                <div className="skill-pills">
                  {cat.items.map(item => (
                    <span key={item} className={`skill-pill ${cat.type}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* RIGHT: radar chart + animated proficiency bars */}
          <div>
            <FadeUp className="chart-wrap" style={{ marginBottom: '1.5rem' }}>
              <div className="chart-title">Core Competency Radar</div>
              <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#1C2B52" />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: '#6B84B8', fontSize: 10, fontFamily: 'DM Mono, monospace' }}
                    />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      dataKey="value"
                      stroke="#00D4FF"
                      fill="#00D4FF"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </FadeUp>

            <div ref={barsRef}>
              <FadeUp className="chart-wrap">
                <div className="chart-title">Technology Proficiency</div>
                <div className="prof-bars">
                  {proficiencies.map(p => (
                    <div key={p.name} className="prof-item">
                      <div className="prof-meta">
                        <span className="prof-name">{p.name}</span>
                        <span className="prof-pct">{p.pct}%</span>
                      </div>
                      <div className="prof-track">
                        <div
                          className="prof-fill"
                          style={{
                            // Bars stay at 0% until the section scrolls into view,
                            // then animate to their target via a CSS transition.
                            width: barsInView ? `${p.pct}%` : '0%',
                            background: p.gradient,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
