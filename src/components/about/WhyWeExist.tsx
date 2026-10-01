import { whyParagraphs } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function WhyWeExist() {
  return (
    <section className="about-dark about-why" aria-labelledby="why-title">
      <div className="container about-section">
        <div className="about-split">
          <Reveal>
            <SectionLabel>Why we exist</SectionLabel>
            <h2 className="about-heading" id="why-title">Because visibility<br />without safety<br />is not freedom.</h2>
          </Reveal>
          <Reveal className="about-prose" delay={0.12}>
            {whyParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
        </div>
        <div className="about-freedom-words" aria-label="Visible. Safe. Supported. Free.">
          {['Visible.', 'Safe.', 'Supported.', 'Free.'].map((word, index) => (
            <Reveal key={word} delay={index * 0.07}><span>{word}</span></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
