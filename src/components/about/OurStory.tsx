import { aboutImages, storyParagraphs } from '../../data/about';
import { Reveal, SectionLabel } from '../ui/Primitives';

export function OurStory() {
  return (
    <section className="about-story about-section container" id="our-story" aria-labelledby="story-title">
      <div className="about-split">
        <Reveal>
          <SectionLabel>Our story</SectionLabel>
          <p className="about-story-preface">It started with a simple belief:</p>
          <h2 id="story-title" className="about-heading">No one should have<br />to choose between<br />who they are and<br />where they belong.</h2>
        </Reveal>
        <Reveal className="about-prose about-story-narrative" delay={0.12}>
          {storyParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </div>
      <Reveal className="about-community-image">
        <figure>
          <img {...aboutImages.community} loading="lazy" />
          <figcaption><span>People. Purpose. Community.</span><span>A shared future starts with us.</span></figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
