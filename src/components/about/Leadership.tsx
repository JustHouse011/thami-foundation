import { leadership } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function Leadership() {
  return (
    <section className="about-leadership about-dark" aria-labelledby="leadership-title">
      <div className="container about-section">
        <Reveal className="about-section-heading">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="about-heading" id="leadership-title">Advocacy with<br />culture at its heart.</h2>
        </Reveal>
        <div className="about-leadership-grid">
          <Reveal className="about-leadership-portrait">
            <figure>
              {leadership.portrait ? <img {...leadership.portrait} loading="lazy" /> : (
                <div className="about-portrait-placeholder rainbow-border" role="img" aria-label="Temporary portrait placeholder for Thami Kotlolo. Approved photograph pending.">
                  <span className="section-label">Portrait / forthcoming</span>
                  <span className="about-portrait-initials" aria-hidden="true">TD</span>
                  <span>Thami Kotlolo</span>
                  <span className="about-portrait-status">Temporary placeholder<br />Approved photograph pending</span>
                </div>
              )}
              <figcaption>{leadership.publicName} / {leadership.role}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="about-leadership-copy about-prose" delay={0.12}>
            <h3>{leadership.name}</h3>
            <p className="about-leadership-role">Known as {leadership.publicName}<br />{leadership.role} · {leadership.organisation}</p>
            {leadership.biography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <p className="about-culture-statement">It can challenge perceptions.<br />It can create conversations.<br />And it can help change society.</p>
          </Reveal>
        </div>
        <Reveal className="about-philosophy">
          <SectionLabel>Our leadership philosophy</SectionLabel>
          <p>Visibility<br />should lead<br />to possibility.</p>
        </Reveal>
      </div>
    </section>
  );
}
