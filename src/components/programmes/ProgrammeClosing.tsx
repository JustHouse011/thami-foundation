import { BorderLight } from '../ui/BorderLight';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { programmeImages, programmeInvolvement } from '../../data/programmes';
import { Reveal, SectionLabel } from '../ui/Primitives';
import { GetInvolved } from '../sections/GetInvolved';

export function ProgrammePhilosophy() {
  return <>
    <section className="programme-philosophy programmes-dark" aria-labelledby="philosophy-title">
      <div className="container programmes-section">
        <Reveal>
          <SectionLabel>Our programme philosophy</SectionLabel>
          <h2 id="philosophy-title">We don’t design<br />programmes<br />around labels.<br /><span>We design them<br />around people.</span></h2>
        </Reveal>
        <Reveal className="programmes-prose">
          <p>Every programme begins with a human question:</p>
          <p>What does someone need to feel safer, stronger and more able to participate in the world around them?</p>
        </Reveal>
      </div>
    </section>
    <figure className="programmes-joy">
      <img {...programmeImages.joy} loading="lazy" />
      <figcaption>More than surviving.<br /><span>Thriving.</span></figcaption>
    </figure>
  </>;
}

export function ProgrammesGetInvolved({ onSelect }: { onSelect: (kind: string) => void }) {
  return <div className="programmes-participation">
    <GetInvolved onSelect={onSelect} className="programmes-involved"
      heading={<>Change needs<br />more than belief.<br />It needs participation.</>}
      description="Support the people, programmes and communities helping build a brighter, braver Africa."
      options={programmeInvolvement} />
    <div className="container programmes-involved-actions">
      <Link className="pill rainbow-border--primary" to="/#get-involved"><BorderLight shine />Get involved <ArrowRight size={18} /></Link>
      <button className="text-link" onClick={() => onSelect('Donate')}>Donate <ArrowRight size={18} /></button>
    </div>
  </div>;
}
