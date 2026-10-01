import { ArrowDown } from 'lucide-react';
import { programmeApproach } from '../../data/programmes';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function ProgrammeApproach() {
  return <section className="programme-approach container programmes-section" aria-labelledby="approach-title">
    <Reveal>
      <SectionLabel>Our approach</SectionLabel>
      <h2 id="approach-title" className="programmes-heading">Everything<br />is connected.</h2>
    </Reveal>
    <ol className="programme-progression">
      {programmeApproach.map((stage, index) => <li key={stage.title}>
        <Reveal className="programme-progression-stage">
          <span className="programme-progression-marker" aria-hidden="true" />
          <span className="section-label">0{index + 1}</span>
          <h3>{stage.title}</h3><p>{stage.description}</p>
          {index < programmeApproach.length - 1 && <ArrowDown aria-hidden="true" size={20} strokeWidth={1} />}
        </Reveal>
      </li>)}
    </ol>
  </section>;
}
