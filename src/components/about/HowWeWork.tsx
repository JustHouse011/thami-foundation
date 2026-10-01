import { workingMethods } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function HowWeWork() {
  return (
    <section className="about-work container about-section" aria-labelledby="work-title">
      <Reveal className="about-work-heading">
        <SectionLabel>How we work</SectionLabel>
        <h2 id="work-title" className="about-heading">Change happens when<br />people, purpose and<br />community meet.</h2>
      </Reveal>
      <div className="about-methods">
        {workingMethods.map((method, index) => (
          <Reveal key={method.title}>
            <article className="about-method">
              <span className="section-label">0{index + 1}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
