import { aboutVision } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function Vision() {
  return (
    <section className="about-vision about-dark" aria-labelledby="vision-title">
      <div className="container about-section">
        <div className="about-split">
          <Reveal>
            <SectionLabel>Our vision</SectionLabel>
            <h2 id="vision-title" className="about-heading">An Africa where<br />being yourself<br />never requires<br />an apology.</h2>
          </Reveal>
          <Reveal className="about-prose" delay={0.12}><p>{aboutVision.description}</p></Reveal>
        </div>
        <div className="about-vision-words">
          {aboutVision.words.map(word => <Reveal key={word}><p>{word}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
