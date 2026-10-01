import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { aboutImages, aboutIntro } from '../../data/about';
import { ease, SectionLabel } from '../ui/Primitives';

export function AboutHero() {
  const reduced = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease },
  });

  return (
    <section className="about-hero container" aria-labelledby="about-title">
      <div className="about-hero-copy">
        <motion.div {...entrance(0.1)}><SectionLabel>About us</SectionLabel></motion.div>
        <h1 id="about-title">
          {aboutIntro.heading.map((line, index) => (
            <motion.span key={line} {...entrance(0.2 + index * 0.12)}>{line}</motion.span>
          ))}
        </h1>
        <motion.p className="about-intro" {...entrance(0.45)}>{aboutIntro.description}</motion.p>
        <motion.div className="about-hero-meta" {...entrance(0.55)}>
          <span>{aboutIntro.established}</span><span>{aboutIntro.location}</span>
        </motion.div>
        <motion.a href="#our-story" className="about-story-link" {...entrance(0.65)}>
          <span className="circle-outline"><ArrowDown size={18} /></span> This is our story
        </motion.a>
      </div>
      <motion.figure className="about-hero-portrait"
        initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: reduced ? 0 : 1.2, delay: reduced ? 0 : 0.65, ease }}>
        <img {...aboutImages.hero} loading="eager" fetchPriority="high" />
        <figcaption>Identity is a beginning. Not a boundary.</figcaption>
      </motion.figure>
      <motion.div className="about-hero-keywords" {...entrance(0.9)}>
        {aboutIntro.keywords.map(word => <span key={word}>{word}</span>)}
      </motion.div>
    </section>
  );
}
