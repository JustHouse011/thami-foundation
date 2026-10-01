import { aboutImages, safeHaven } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function Thingolezwe() {
  return (
    <section className="about-haven container about-section" aria-labelledby="haven-title">
      <Reveal className="about-haven-heading">
        <SectionLabel>Safe havens</SectionLabel>
        <h2 id="haven-title" className="about-heading">Safety is where<br />possibility begins.</h2>
      </Reveal>
      <Reveal className="about-haven-image">
        <figure><img {...aboutImages.thingolezwe} loading="lazy" /><figcaption>Somewhere to feel safe. Space to become.</figcaption></figure>
      </Reveal>
      <Reveal className="about-haven-copy about-prose" delay={0.12}>
        <h3>{safeHaven.name}</h3>
        <p>{safeHaven.description}</p>
        <p>At its heart is a simple principle:</p>
        <p className="about-haven-principle">{safeHaven.principle}</p>
        <div className="about-haven-labels">{safeHaven.labels.map(label => <span key={label}>{label}</span>)}</div>
      </Reveal>
    </section>
  );
}
