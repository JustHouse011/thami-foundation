import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { programmeImages, programmes, programmesIntro } from '../../data/programmes';
import { ease, SectionLabel } from '../ui/Primitives';

export function ProgrammesHero() {
  const reduced = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease },
  });
  return <section className="programmes-hero container" aria-labelledby="programmes-title">
    <div className="programmes-hero-copy">
      <motion.div {...entrance(0.1)}><SectionLabel>Our programmes</SectionLabel></motion.div>
      <h1 id="programmes-title"><motion.span {...entrance(0.2)}>Purpose</motion.span><motion.span {...entrance(0.32)}>in action.</motion.span></h1>
      <motion.p {...entrance(0.45)}>{programmesIntro.hero}</motion.p>
      <nav className="programmes-hero-index" aria-label="Programme sections">
        {programmes.map((programme, index) => <motion.a key={programme.id} {...entrance(0.55 + index * 0.05)} href={`#${programme.id}`}>
          <span>{programme.number}</span>{programme.shortLabel}<ArrowDown size={13} />
        </motion.a>)}
      </nav>
    </div>
    <motion.figure className="programmes-hero-photo"
      initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: reduced ? 0 : 1.2, delay: reduced ? 0 : 0.8, ease }}>
      <img {...programmeImages.hero} loading="eager" fetchPriority="high" />
      <figcaption><span>01—05 / Programmes for change</span><span>People. Purpose. Action. Change.</span></figcaption>
    </motion.figure>
    <motion.p className="programmes-hero-footnote" {...entrance(1)}><span className="editorial-rule" />{programmesIntro.secondary}</motion.p>
  </section>;
}
