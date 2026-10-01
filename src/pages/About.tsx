import { AboutHero } from '../components/about/AboutHero';
import { OurStory } from '../components/about/OurStory';
import { WhyWeExist } from '../components/about/WhyWeExist';
import { FoundationPillars } from '../components/about/FoundationPillars';
import { Thingolezwe } from '../components/about/Thingolezwe';
import { BelongingBreak } from '../components/about/BelongingBreak';
import { HowWeWork } from '../components/about/HowWeWork';
import { Leadership } from '../components/about/Leadership';
import { Timeline } from '../components/about/Timeline';
import { Vision } from '../components/about/Vision';
import { AboutCTA } from '../components/about/AboutCTA';
import type { Overlay } from '../components/ui/SiteOverlay';
import '../styles/about.css';

export function About({ onOpen }: { onOpen: (overlay: Overlay) => void }) {
  return (
    <main id="main" tabIndex={-1} className="about-page">
      <AboutHero />
      <OurStory />
      <WhyWeExist />
      <FoundationPillars />
      <Thingolezwe />
      <BelongingBreak />
      <HowWeWork />
      <Leadership />
      <Timeline />
      <Vision />
      <AboutCTA onDonate={() => onOpen({ type: 'involve', kind: 'Donate' })} />
    </main>
  );
}
