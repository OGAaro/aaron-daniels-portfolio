import { certifications } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import FadeUp from './FadeUp';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeader label="Credentials" title="Certifications" />
        <div className="certs-grid">
          {certifications.map(cert => (
            <FadeUp key={cert.name} className="cert-card">
              <div
                className="cert-icon"
                style={{
                  background: cert.color,
                  border: `1px solid ${cert.border}`,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
