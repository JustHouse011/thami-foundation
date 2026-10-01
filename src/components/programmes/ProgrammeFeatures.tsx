import { programmes } from '../../data/programmes';
import { Reveal } from '../ui/Primitives';
import { ProgrammeBody, ProgrammeHeading, ProgrammePhoto, ProgrammeWords } from './ProgrammePrimitives';

export function Advocacy() {
  const programme = programmes[0];
  return <section id={programme.id} className="programme-feature programme-advocacy container programmes-section" aria-labelledby={`${programme.id}-title`}>
    <ProgrammeHeading programme={programme} />
    <ProgrammePhoto image={programme.image} caption="A voice heard. A conversation opened." />
    <ProgrammeBody programme={programme} />
    <ProgrammeWords words={programme.keywords} />
  </section>;
}

export function Education() {
  const programme = programmes[1];
  return <section id={programme.id} className="programme-education" aria-labelledby={`${programme.id}-title`}>
    <div className="container programmes-section">
      <ProgrammeHeading programme={programme} />
      <ProgrammePhoto image={programme.image} caption="Understanding starts with listening." />
      <div className="programme-education-bottom">
        <ProgrammeWords words={programme.keywords} className="programme-words-large" />
        <ProgrammeBody programme={programme} />
      </div>
    </div>
  </section>;
}

export function SafeSpaces() {
  const programme = programmes[2];
  return <section id={programme.id} className="programmes-dark programme-safety" aria-labelledby={`${programme.id}-title`}>
    <div className="container programmes-section">
      <div className="programme-feature">
        <ProgrammeHeading programme={programme} />
        <ProgrammePhoto image={programme.image} caption="Care. Connection. The space to begin again." />
        <ProgrammeBody programme={programme} />
      </div>
      <ProgrammeWords words={programme.keywords} className="programme-safety-words" />
      <Reveal className="programme-safety-statement"><p>Before people can<br />build a future,<br /><span>they need somewhere<br />they can feel safe.</span></p></Reveal>
    </div>
  </section>;
}

export function Empowerment() {
  const programme = programmes[3];
  return <section id={programme.id} className="programme-feature programme-empowerment container programmes-section" aria-labelledby={`${programme.id}-title`}>
    <ProgrammeHeading programme={programme} />
    <ProgrammePhoto image={programme.image} caption="The tools to create. The confidence to lead." />
    <ProgrammeBody programme={programme} />
    <ProgrammeWords words={programme.keywords} className="programme-words-large" />
  </section>;
}

export function Community() {
  const programme = programmes[4];
  return <section id={programme.id} className="programme-community container programmes-section" aria-labelledby={`${programme.id}-title`}>
    <ProgrammeHeading programme={programme} />
    <ProgrammePhoto image={programme.image} caption="Connection is where collective strength begins." />
    <ProgrammeBody programme={programme} />
    <div className="programme-community-outro">
      <ProgrammeWords words={programme.keywords} className="programme-words-large" />
      <Reveal className="programmes-prose"><p>Community begins locally, but conversations around dignity, equality and belonging connect across borders.</p></Reveal>
    </div>
  </section>;
}
