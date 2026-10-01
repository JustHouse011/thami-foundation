import { timeline } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function Timeline() {
  return (
    <section className="about-journey container about-section" aria-labelledby="journey-title">
      <Reveal className="about-journey-heading">
        <SectionLabel>Our journey</SectionLabel>
        <h2 className="about-heading" id="journey-title">A movement<br />in motion.</h2>
      </Reveal>
      <ol className="about-timeline">
        {timeline.map(item => (
          <li key={item.year}>
            <Reveal className="about-timeline-entry">
              <span className="about-timeline-marker" aria-hidden="true" />
              <p className="about-timeline-year">{item.year}</p>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
