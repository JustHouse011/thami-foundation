import { ProgrammesHero } from '../components/programmes/ProgrammesHero';
import { ProgrammesIntroduction } from '../components/programmes/ProgrammesIntroduction';
import { Advocacy, Education, SafeSpaces, Empowerment, Community } from '../components/programmes/ProgrammeFeatures';
import { Culture } from '../components/programmes/Culture';
import { ProgrammeApproach } from '../components/programmes/ProgrammeApproach';
import { ProgrammePhilosophy, ProgrammesGetInvolved } from '../components/programmes/ProgrammeClosing';
import type { Overlay } from '../components/ui/SiteOverlay';
import '../styles/programmes.css';

export function Programmes({ onOpen }: { onOpen: (overlay: Overlay) => void }) {
  return <main id="main" tabIndex={-1} className="programmes-page">
    <ProgrammesHero />
    <ProgrammesIntroduction />
    <Advocacy />
    <Education />
    <SafeSpaces />
    <Empowerment />
    <Community />
    <Culture />
    <ProgrammeApproach />
    <ProgrammePhilosophy />
    <ProgrammesGetInvolved onSelect={kind => onOpen({ type: 'involve', kind })} />
  </main>;
}
