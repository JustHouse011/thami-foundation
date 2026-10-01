import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getInvolvedOptions } from '../../data/content';
import { Reveal, SectionLabel } from '../ui/Primitives';

interface GetInvolvedProps {
  onSelect: (kind: string) => void;
  heading?: ReactNode;
  description?: string;
  options?: typeof getInvolvedOptions;
  className?: string;
}

export function GetInvolved({ onSelect, heading, description, options = getInvolvedOptions, className = '' }: GetInvolvedProps) {
  return <section className={`get-involved container ${className}`} id="get-involved" aria-labelledby="involved-title">
    <Reveal className="involved-heading">
      <SectionLabel>Get involved</SectionLabel>
      <h2 id="involved-title">{heading ?? <>There’s a place<br />for you here.</>}</h2>
      {description && <p className="involved-description">{description}</p>}
    </Reveal>
    <div className="involved-grid">
      {options.map(({ id, icon: Icon, text }, index) => <Reveal key={id} delay={index * 0.06}>
        <button className="involved-option rainbow-border" onClick={() => onSelect(id)}>
          <Icon size={36} strokeWidth={1.2} />
          <h3>{id}<ArrowUpRight size={16} /></h3><p>{text}</p>
        </button>
      </Reveal>)}
    </div>
  </section>;
}
