import { BorderLight } from '../ui/BorderLight';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function AboutCTA({ onDonate }: { onDonate: () => void }) {
  return (
    <section className="about-cta container about-section" aria-labelledby="about-cta-title">
      <Reveal>
        <SectionLabel>Be part of the story</SectionLabel>
        <h2 id="about-cta-title" className="about-heading">A brighter Africa<br />takes all of us.</h2>
      </Reveal>
      <Reveal className="about-prose" delay={0.12}>
        <p>Whether you give, partner, volunteer or simply stand with the community, every action helps create more space for people to live freely.</p>
        <div className="about-cta-actions">
          <Link className="pill rainbow-border rainbow-border--primary" to="/#get-involved"><BorderLight shine />Get involved <ArrowRight size={18} /></Link>
          <button className="text-link" onClick={onDonate}>Donate <ArrowRight size={18} /></button>
        </div>
      </Reveal>
    </section>
  );
}
