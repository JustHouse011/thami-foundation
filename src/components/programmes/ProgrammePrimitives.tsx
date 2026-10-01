import { Reveal, SectionLabel } from '../ui/Primitives';
import type { Programme, ProgrammeImage } from '../../data/programmes';

export function ProgrammeHeading({ programme }: { programme: Programme }) {
  return <Reveal className="programme-heading">
    <span className="programme-number" aria-hidden="true">{programme.number}</span>
    <div>
      <SectionLabel>{programme.eyebrow}</SectionLabel>
      <h2 className="programmes-heading" id={`${programme.id}-title`}>
        {programme.title.map(line => <span key={line}>{line}</span>)}
      </h2>
    </div>
  </Reveal>;
}

export function ProgrammePhoto({ image, className = '', caption }: { image: ProgrammeImage; className?: string; caption?: string }) {
  return <Reveal className={`programme-photo ${className}`}>
    <figure><img {...image} loading="lazy" />{caption && <figcaption>{caption}</figcaption>}</figure>
  </Reveal>;
}

export function ProgrammeBody({ programme }: { programme: Programme }) {
  return <Reveal className="programme-body programmes-prose">
    {programme.id === 'safe-spaces' && <h3 className="section-label">Thingolezwe</h3>}
    {programme.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
  </Reveal>;
}

export function ProgrammeWords({ words, className = '' }: { words: string[]; className?: string }) {
  return <div className={`programme-words ${className}`}>
    {words.map((word, index) => <Reveal key={word} delay={index * 0.06}><span>{word}</span></Reveal>)}
  </div>;
}
