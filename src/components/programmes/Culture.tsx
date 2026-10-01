import { programmeImages, cultureCopy } from '../../data/programmes';
import { Reveal, SectionLabel } from '../ui/Primitives';
import { ProgrammePhoto } from './ProgrammePrimitives';

export function Culture() {
  return <section className="programme-culture programmes-dark" aria-labelledby="culture-title">
    <div className="container programmes-section">
      <Reveal className="programme-culture-heading">
        <SectionLabel>Culture & visibility</SectionLabel>
        <h2 id="culture-title" className="programmes-heading">Culture can<br />change the<br />conversation.</h2>
      </Reveal>
      <div className="programme-culture-collage">
        <ProgrammePhoto image={programmeImages.cultureFashion} className="culture-fashion" caption="Expression, without limits." />
        <ProgrammePhoto image={programmeImages.cultureStage} className="culture-stage" caption="Our culture. Our sound. Our stage." />
        <Reveal className="programmes-prose culture-copy">
          {cultureCopy.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <p className="culture-bridge">Culture becomes a bridge.</p>
          <p>Between identity and understanding.<br />Between visibility and acceptance.<br />Between community and society.</p>
        </Reveal>
        <ProgrammePhoto image={programmeImages.cultureAudience} className="culture-audience" caption="More than a moment. A connection." />
      </div>
      <div className="programme-culture-words">
        {['Media', 'Fashion', 'Music', 'Story', 'Community'].map((word, index) => <Reveal key={word} delay={index * 0.04}><span>{word}</span></Reveal>)}
      </div>
    </div>
  </section>;
}
