import { ArrowDownRight } from 'lucide-react';
import { programmes, programmesIntro } from '../../data/programmes';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function ProgrammesIntroduction() {
  return <>
    <section className="programmes-introduction container programmes-section" aria-labelledby="programmes-intro-title">
      <Reveal>
        <SectionLabel>What we do</SectionLabel>
        <h2 className="programmes-heading" id="programmes-intro-title">Change doesn’t happen<br />through visibility alone.<br /><span className="programmes-statement-break">It happens when people<br />have the support to<br />move forward.</span></h2>
      </Reveal>
      <Reveal className="programmes-prose">
        <p>{programmesIntro.body}</p>
        <p>Our programmes recognise that these challenges are connected.</p>
        <div className="programmes-intro-connections">{programmesIntro.connections.map(line => <p key={line}>{line}</p>)}</div>
      </Reveal>
    </section>
    <section className="programmes-index container" aria-labelledby="programmes-index-title">
      <SectionLabel>Find your focus</SectionLabel>
      <h2 id="programmes-index-title" className="sr-only">Explore our five programmes</h2>
      <nav aria-label="Programme index">
        {programmes.map(programme => <Reveal key={programme.id}>
          <a href={`#${programme.id}`}><span className="programmes-index-number">{programme.number}</span><span className="programmes-index-title">{programme.indexTitle}</span><ArrowDownRight strokeWidth={1.2} /></a>
        </Reveal>)}
      </nav>
    </section>
  </>;
}
