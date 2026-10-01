import { aboutPillars } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function FoundationPillars() {
  return (
    <section className="about-pillars container about-section" aria-labelledby="pillars-title">
      <Reveal className="about-section-heading">
        <SectionLabel>What we stand for</SectionLabel>
        <h2 className="about-heading" id="pillars-title">Purpose,<br />made practical.</h2>
      </Reveal>
      <div>
        {aboutPillars.map(pillar => (
          <Reveal key={pillar.number}>
            <article className="about-pillar-row">
              <span className="about-pillar-number" aria-hidden="true">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
