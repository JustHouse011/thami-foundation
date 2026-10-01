import { BorderLight } from '../components/ui/BorderLight';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionLabel, ease } from '../components/ui/Primitives';
import { EditorialImage } from '../components/ui/EditorialImage';
import { RainbowIcon } from '../components/ui/RainbowIcon';
import { featherImages, type FeatherImageKey } from '../data/featherAwards';
import type { Overlay } from '../components/ui/SiteOverlay';
import '../styles/feather-awards.css';

function Photo({ name, label, className = '', ratio }: { name: FeatherImageKey; label: string; className?: string; ratio?: string }) {
  return <Reveal className={className}><EditorialImage image={featherImages[name]} label={label} ratio={ratio} edge={name === 'recognition' || name === 'fashion-detail'} /></Reveal>;
}
function Heading({ label, lines, id }: { label: string; lines: string[]; id: string }) {
  return <Reveal><SectionLabel>{label}</SectionLabel><h2 id={id} className="feather-heading">{lines.map(line => <span key={line}>{line}</span>)}</h2></Reveal>;
}

export function FeatherAwards({ onOpen }: { onOpen: (overlay: Overlay) => void }) {
  const reduced = useReducedMotion();
  return <main id="main" tabIndex={-1} className="feather-page">
    <section className="feather-hero feather-dark" aria-labelledby="feather-title">
      <div className="container feather-hero-layout">
        <motion.div className="feather-hero-eyebrow" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }}><SectionLabel>Feather Awards</SectionLabel><span>South Africa</span></motion.div>
        <h1 id="feather-title">{['VISIBLE.', 'FEARLESS.', 'CELEBRATED.'].map((word, i) => <motion.span key={word} initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .85, delay: reduced ? 0 : .15 + i * .14, ease }}>{word}</motion.span>)}</h1>
        <motion.div className="feather-hero-photo" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: .7 }}><EditorialImage image={featherImages.hero} label="The arrival" priority ratio="5 / 4" /></motion.div>
        <Reveal className="feather-hero-copy" delay={.6}><p>A celebration of LGBTQIA+ excellence, expression and the people shaping culture.</p></Reveal>
        <Link to="#more-than-a-night" className="feather-enter">Enter the Feathers <RainbowIcon><ArrowDown size={22} /></RainbowIcon></Link>
        <p className="feather-hero-meta">Culture / Community / Celebration <span>01 — The arrival</span></p>
      </div>
    </section>

    <section id="more-than-a-night" className="container feather-section feather-intro" aria-labelledby="feather-intro-title">
      <Heading label="02 / More than an awards night" lines={['Where visibility', 'becomes', 'celebration.']} id="feather-intro-title" />
      <Photo name="intro" label="This is community" ratio="5 / 4" />
      <Reveal className="feather-prose"><p>The Feather Awards celebrate people, voices and cultural moments that contribute to LGBTQIA+ visibility, expression and belonging.</p><p>The platform brings together culture, advocacy, fashion, entertainment and community.</p></Reveal>
      <span className="feather-margin-note">A moment. A movement. A feeling.</span>
    </section>

    <section className="container feather-section feather-why" aria-labelledby="feather-why-title">
      <Heading label="03 / Why Feathers" lines={['Visibility changes', 'what people', 'believe is possible.']} id="feather-why-title" />
      <div className="feather-why-bottom"><Reveal className="feather-prose"><p>Representation matters when people can see themselves not only included, but celebrated.</p><p>The Feather Awards create space for LGBTQIA+ people and allies to participate visibly in culture while contributing to broader conversations around dignity, equality and belonging.</p></Reveal><div className="feather-small-words">{['Visible.', 'Valued.', 'Celebrated.'].map((word, i) => <Reveal key={word} delay={i * .08}><span>{word}</span></Reveal>)}</div></div>
    </section>

    <section className="feather-dark" aria-labelledby="feather-carpet-title"><div className="container feather-section">
      <Heading label="04 / The red carpet" lines={['Expression', 'without apology.']} id="feather-carpet-title" />
      <div className="feather-collage feather-carpet">
        {([{ name: 'red-carpet-01', label: 'Look / 01', word: 'Style.' }, { name: 'red-carpet-02', label: 'Look / 02', word: 'Identity.' }, { name: 'red-carpet-detail', label: 'Detail / 03', word: 'Expression.' }] as const).map(item => <article key={item.name}><SectionLabel>{item.label}</SectionLabel><Photo name={item.name} label={item.word} /><h3>{item.word}</h3></article>)}
      </div>
    </div></section>

    <section className="feather-dark feather-stage" aria-labelledby="feather-stage-title"><div className="container feather-section feather-stage-layout">
      <Heading label="05 / The stage" lines={['A stage', 'for more', 'than applause.']} id="feather-stage-title" />
      <Photo name="stage-wide" label="The stage belongs to us" className="feather-stage-wide" ratio="16 / 9" />
      <Reveal className="feather-prose"><p>Performance, storytelling and recognition transform the stage into a space where culture and visibility meet.</p><span className="feather-margin-note">Sound. Movement. Presence.</span></Reveal>
      <Photo name="stage-close" label="Voice" className="feather-stage-close" />
    </div></section>

    <section className="container feather-section feather-recognition" aria-labelledby="feather-recognition-title">
      <Heading label="06 / Recognition" lines={['We', 'see', 'you.']} id="feather-recognition-title" />
      <Photo name="recognition" label="Your contribution belongs here" ratio="5 / 6" />
      <Reveal className="feather-prose"><h3>Recognition makes people visible.</h3><p>An award can recognise achievement. But recognition can also say: we see you. Your work matters. Your contribution belongs here.</p></Reveal>
    </section>

    <section className="container feather-section feather-culture" aria-labelledby="feather-culture-title">
      <Heading label="07 / Cultural impact" lines={['Culture can', 'move the', 'conversation.']} id="feather-culture-title" />
      <Photo name="culture" label="Culture moves" ratio="3 / 2" />
      <Reveal className="feather-prose"><p>Fashion, entertainment, media and public celebration can create new ways for people to encounter identity and difference.</p><p>By occupying cultural space visibly, LGBTQIA+ communities can be part of conversations that extend beyond the event itself.</p></Reveal>
      <div className="feather-culture-words">{['Media.', 'Fashion.', 'Music.', 'Performance.', 'Community.', 'Visibility.'].map((word, i) => <Reveal key={word} delay={i * .03}><span>{word}</span></Reveal>)}</div>
    </section>

    <section className="feather-dark" aria-labelledby="feather-fashion-title"><div className="container feather-section">
      <Heading label="08 / Fashion as language" lines={['What we wear', 'can say:', 'I am here.']} id="feather-fashion-title" />
      <div className="feather-collage feather-fashion">{([{ name: 'fashion-01', label: 'Look / 01', caption: 'Presence.' }, { name: 'fashion-02', label: 'Portrait / 02', caption: 'I am visible.' }, { name: 'fashion-detail', label: 'Detail / 03', caption: 'Expression is in the details.' }] as const).map(item => <article key={item.name}><SectionLabel>{item.label}</SectionLabel><Photo name={item.name} label={item.caption} /><p>{item.caption}</p></article>)}</div>
    </div></section>

    <section className="container feather-section feather-people" aria-labelledby="feather-people-title">
      <Heading label="09 / The people" lines={['Celebrating', 'those who move', 'culture forward.']} id="feather-people-title" />
      <Photo name="people" label="The people behind the moment" />
      <Reveal className="feather-prose"><p>The voices that challenge us. The creativity that moves us. The people who make room for others.</p><p>Visibility has many faces. This celebration belongs to a community.</p></Reveal>
    </section>

    <section className="feather-dark" aria-labelledby="feather-history-title"><div className="container feather-section feather-history">
      <Heading label="10 / The journey" lines={['A celebration', 'becomes', 'a legacy.']} id="feather-history-title" />
      <Photo name="history" label="We have been building this" ratio="3 / 2" />
      <ol className="feather-chapters" aria-label="The journey in conceptual chapters">{['Beginning', 'Visibility', 'Community', 'Culture', 'Legacy'].map((chapter, i) => <li key={chapter}><span>0{i + 1}</span>{chapter}<RainbowIcon><ArrowDown size={20} /></RainbowIcon></li>)}</ol>
      <Reveal className="feather-prose"><p>A moment of recognition can live beyond the night. In the stories we carry. In the space we make for each other. In what the next generation sees as possible.</p></Reveal>
    </div></section>

    <section className="container feather-section feather-backstage" aria-labelledby="feather-backstage-title">
      <Heading label="11 / Behind the lights" lines={['Before the stage,', 'there is the', 'human moment.']} id="feather-backstage-title" />
      <Photo name="backstage" label="Before the lights" />
      <Reveal className="feather-prose"><p>Before the lights, the cameras and the applause, there are people preparing, creating and showing up as themselves.</p></Reveal>
    </section>

    <section className="container feather-section feather-community" aria-labelledby="feather-community-title">
      <Heading label="12 / The community" lines={['The night belongs', 'to everyone', 'who makes it', 'possible.']} id="feather-community-title" />
      <Reveal className="feather-prose"><p>Behind every stage, every look and every moment of recognition is a community that gives the celebration its meaning.</p></Reveal>
      <Photo name="community" label="This belongs to all of us" ratio="16 / 9" />
    </section>

    <section className="feather-joy feather-dark" aria-labelledby="feather-joy-title">
      <motion.div className="feather-joy-photo" initial={false} whileInView={reduced ? undefined : { scale: [1.025, 1] }} viewport={{ once: true }} transition={{ duration: 2 }}><EditorialImage image={featherImages['celebration-wide']} label="A shared celebration" ratio="16 / 9" /></motion.div>
      <div className="container feather-joy-text"><SectionLabel>13 / A feeling that stays</SectionLabel><Reveal><h2 id="feather-joy-title">This<br />is<br />queer<br />joy.</h2></Reveal></div>
    </section>

    <section className="feather-dark feather-manifesto" aria-labelledby="feather-manifesto-title"><div className="container feather-section">
      <SectionLabel>14 / A declaration</SectionLabel><Reveal><h2 id="feather-manifesto-title">We are<br />not asking<br />to be seen.<br /><span>We are<br />here.</span></h2></Reveal>
      <Reveal><p className="feather-manifesto-signoff">Visible. Fearless. Celebrated.</p></Reveal>
    </div></section>

    <section className="container feather-section feather-cta" aria-labelledby="feather-cta-title">
      <Heading label="15 / Feather Awards" lines={['Come for', 'the celebration.', 'Leave with', 'the feeling.']} id="feather-cta-title" />
      <Photo name="cta" label="Come with us" />
      <div className="feather-actions"><Link to="/#get-involved" className="pill rainbow-border rainbow-border--primary"><BorderLight shine />Get involved <RainbowIcon><ArrowUpRight size={19} /></RainbowIcon></Link><button className="pill rainbow-border--primary" onClick={() => onOpen({ type: 'involve', kind: 'Donate' })}><BorderLight shine />Support the Foundation <RainbowIcon><ArrowUpRight size={19} /></RainbowIcon></button><Link className="text-link" to="/programmes">Discover our programmes <RainbowIcon><ArrowUpRight size={19} /></RainbowIcon></Link></div>
    </section>
  </main>;
}
