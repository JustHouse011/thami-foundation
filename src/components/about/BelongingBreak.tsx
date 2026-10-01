import { motion, useReducedMotion } from 'framer-motion';
import { aboutImages } from '../../data/about';
import { Reveal, ease } from '../ui/Primitives';

export function BelongingBreak() {
  const reduced = useReducedMotion();
  return (
    <section className="about-belonging" aria-labelledby="belonging-title">
      <motion.img {...aboutImages.belonging} loading="lazy"
        initial={reduced ? false : { scale: 1.05 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.2, ease }} />
      <div className="container">
        <Reveal><h2 id="belonging-title">We don’t just<br />create space.<br /><span>We create<br />belonging.</span></h2></Reveal>
        <p className="editorial-note">Together is where<br />possibility lives.</p>
      </div>
    </section>
  );
}
