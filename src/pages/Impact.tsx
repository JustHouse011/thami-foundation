import { BorderLight } from '../components/ui/BorderLight';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Primitives';
import { impactMetrics } from '../data/impact';
import impactHero from '../assets/images/impact/impact-hero.jpg';
import impactHuman from '../assets/images/impact/impact-human.jpg';
import impactSafety from '../assets/images/impact/impact-safety.jpg';
import impactVoice from '../assets/images/impact/impact-voice.jpg';
import impactCommunity from '../assets/images/impact/impact-community.jpg';
import impactCulture01 from '../assets/images/impact/impact-culture-01.jpg';
import impactCulture02 from '../assets/images/impact/impact-culture-02.jpg';
import impactCulture03 from '../assets/images/impact/impact-culture-03.jpg';
import impactFuture from '../assets/images/impact/impact-future.jpg';
import impactCta from '../assets/images/impact/impact-cta.jpg';
import '../styles/impact.css';

const manifestoWords = ['SEEN.', 'HEARD.', 'SAFE.', 'SUPPORTED.', 'CONNECTED.', 'EMPOWERED.'];

const motionSteps = [
  { title: 'A CONVERSATION', text: 'can create' },
  { title: 'UNDERSTANDING', text: 'which strengthens' },
  { title: 'ACCEPTANCE', text: 'which creates' },
  { title: 'BELONGING', text: 'which opens' },
  { title: 'OPPORTUNITY', text: 'which builds' },
  { title: 'CHANGE', text: 'for people.' },
];

export function Impact() {
  const reduced = useReducedMotion();

  return (
    <main id="main" tabIndex={-1} className="impact-page">
      <section className="impact-hero container" aria-labelledby="impact-hero-title">
        <div className="impact-hero-copy">
          <Reveal>
            <p className="section-label">OUR IMPACT</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="impact-hero-title">
              <span>Change</span>
              <span>you can</span>
              <span>feel.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="impact-intro">
              Impact is more than a number. It&apos;s a person who feels safer. A voice that is heard. A community that becomes stronger. A future that becomes possible.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="impact-hero-words" aria-label="Impact themes">
              <span>People</span>
              <span>Progress</span>
              <span>Purpose</span>
              <span>Change</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} className="impact-hero-image-wrap">
          <figure className="impact-hero-image">
            <img
              src={impactHero}
              alt="Friends sharing a joyful moment at a community gathering."
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: 'center 40%' }}
            />
          </figure>
        </Reveal>
      </section>

      <section className="impact-manifesto" aria-labelledby="impact-manifesto-title">
        <div className="container impact-manifesto-inner">
          <Reveal>
            <p className="section-label">WHAT IMPACT MEANS TO US</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="impact-manifesto-title">
              Impact isn&apos;t<br />
              what we say<br />
              we&apos;ve done.<br />
              It&apos;s what changes<br />
              for people.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="impact-manifesto-copy">
              For the Thami Dish Foundation, impact begins with people. It can be found in safer spaces, stronger connections, new conversations, greater visibility and opportunities for LGBTQIA+ people to participate more freely in society.
            </p>
          </Reveal>
        </div>
        <div className="impact-manifesto-words container" aria-label="Manifesto words">
          {manifestoWords.map((word, index) => (
            <motion.span
              key={word}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : index * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="impact-metrics section-space" aria-labelledby="impact-numbers-title">
        <div className="container">
          <Reveal>
            <p className="section-label">IMPACT IN NUMBERS</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="impact-numbers-title" className="impact-section-heading">
              The numbers<br />
              tell part<br />
              of the story.
            </h2>
          </Reveal>

          <div className="impact-metric-list" aria-label="Impact categories">
            {impactMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06} className="impact-metric-row">
                <div className="impact-metric-index">0{index + 1}</div>
                <div className="impact-metric-copy">
                  <span>{metric.label}</span>
                  <div className="impact-metric-rule" aria-hidden="true" />
                </div>
                <p>{metric.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-human section-space" aria-labelledby="impact-human-title">
        <div className="container impact-human-layout">
          <Reveal>
            <p className="section-label">BEYOND THE NUMBERS</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="impact-human-title" className="impact-section-heading">
              Every number<br />
              has a name.<br />
              Every story<br />
              has a person.
            </h2>
          </Reveal>
          <figure className="impact-human-figure">
            <img
              src={impactHuman}
              alt="Young person photographed in a quiet, confident portrait."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 38%' }}
            />
          </figure>
          <div className="impact-human-wording" aria-label="Human impact message">
            <span>IMPACT</span>
            <span>IS HUMAN.</span>
          </div>
        </div>
      </section>

      <section className="impact-story impact-story-safety" aria-labelledby="safety-story-title">
        <div className="container impact-story-grid">
          <figure className="impact-story-figure">
            <img
              src={impactSafety}
              alt="Friends sharing food and conversation in a welcoming space."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 48%' }}
            />
          </figure>
          <div className="impact-story-copy">
            <Reveal>
              <p className="section-label">STORIES OF CHANGE</p>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="impact-story-number">01</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 id="safety-story-title">
                A safer space<br />
                can change<br />
                everything.
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Safety can be the difference between simply surviving and having the space to begin again. Creating supportive environments gives people room to reconnect, make decisions about their future and move forward with greater dignity. The impact of safety extends beyond shelter. It creates breathing room.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="impact-story impact-story-voice" aria-labelledby="voice-story-title">
        <div className="container impact-story-grid reverse">
          <figure className="impact-story-figure">
            <img
              src={impactVoice}
              alt="Community members continuing a conversation after an event."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 50%' }}
            />
          </figure>
          <div className="impact-story-copy">
            <Reveal>
              <span className="impact-story-number">02</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 id="voice-story-title">
                Being heard<br />
                changes what&apos;s<br />
                possible.
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                A conversation can challenge an assumption. A workshop can create understanding. A visible voice can make someone else feel less alone. Change often begins long before it becomes measurable. It begins when people listen differently.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="impact-community section-space" aria-labelledby="community-impact-title">
        <div className="container impact-community-layout">
          <Reveal>
            <p className="section-label">COMMUNITY IMPACT</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="community-impact-title">
              Change travels<br />
              through people.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="impact-community-copy">
              Ideas move through families, friendships, communities, organisations and culture. The Foundation&apos;s work is strengthened when conversations continue beyond the room in which they started.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="impact-community-statement">
              Change becomes<br />
              a movement<br />
              when it travels.
            </p>
          </Reveal>
          <figure className="impact-community-image">
            <img
              src={impactCommunity}
              alt="Friends and community members gathering together."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 48%' }}
            />
          </figure>
          <div className="impact-community-geo" aria-label="Community movement text">
            <span>FROM ONE CONVERSATION</span>
            <span>TO ANOTHER.</span>
            <span>FROM ONE COMMUNITY</span>
            <span>TO ANOTHER.</span>
          </div>
        </div>
      </section>

      <section className="impact-culture impact-dark section-space" aria-labelledby="culture-impact-title">
        <div className="container">
          <Reveal>
            <p className="section-label">CULTURAL IMPACT</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="culture-impact-title" className="impact-section-heading impact-light-heading">
              Sometimes<br />
              culture moves<br />
              first.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="impact-culture-copy">
              Culture can open conversations that institutions sometimes struggle to begin. Through media, fashion, celebration, storytelling and cultural platforms, LGBTQIA+ visibility becomes part of a wider public conversation about identity, dignity and belonging.
            </p>
          </Reveal>

          <div className="impact-culture-collage">
            <figure className="impact-culture-main impact-culture-01">
              <img src={impactCulture01} alt="Fashion-forward guest photographed at a cultural celebration." loading="lazy" decoding="async" style={{ objectPosition: 'center 38%' }} />
            </figure>
            <figure className="impact-culture-secondary impact-culture-02">
              <img src={impactCulture02} alt="Performer on stage during a cultural event." loading="lazy" decoding="async" style={{ objectPosition: 'center 28%' }} />
            </figure>
            <figure className="impact-culture-secondary impact-culture-03">
              <img src={impactCulture03} alt="Audience members celebrating together." loading="lazy" decoding="async" style={{ objectPosition: 'center 40%' }} />
            </figure>
          </div>

          <div className="impact-culture-words" aria-label="Cultural values">
            <span>VISIBLE.</span>
            <span>EXPRESSED.</span>
            <span>CELEBRATED.</span>
            <span>CONNECTED.</span>
          </div>
        </div>
      </section>

      <section className="impact-motion section-space" aria-labelledby="motion-title">
        <div className="container impact-motion-layout">
          <Reveal>
            <p className="section-label">HOW CHANGE GROWS</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="motion-title" className="impact-section-heading">
              One action<br />
              creates another.
            </h2>
          </Reveal>
          <div className="impact-motion-line" aria-hidden="true" />
          <div className="impact-motion-steps">
            {motionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="impact-motion-step"
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : index * 0.1 }}
              >
                <span>{step.title}</span>
                <small>{step.text}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-philosophy section-space impact-dark" aria-labelledby="impact-philosophy-title">
        <div className="container impact-philosophy-layout">
          <Reveal>
            <p className="section-label">IMPACT PHILOSOPHY</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="impact-philosophy-title">
              NOT EVERYTHING<br />
              THAT MATTERS<br />
              CAN BE COUNTED.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="impact-philosophy-copy">
              Impact lives in both evidence and experience. It is found in measurable reach, but also in confidence, safety, connection, visibility and the freedom to imagine a different future.
            </p>
          </Reveal>
          <div className="impact-philosophy-words" aria-label="Impact principles">
            {['DIGNITY.', 'SAFETY.', 'VOICE.', 'OPPORTUNITY.', 'BELONGING.'].map((word, index) => (
              <motion.span
                key={word}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : index * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-next section-space" aria-labelledby="impact-next-title">
        <div className="container impact-next-layout">
          <Reveal>
            <p className="section-label">THE WORK CONTINUES</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="impact-next-title">
              Impact is not<br />
              a finish line.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="impact-next-copy">
              Every step forward creates the possibility for another. The Foundation&apos;s work continues through advocacy, education, safer spaces, community, opportunity and culture. Because a brighter, braver Africa isn&apos;t something we arrive at. It&apos;s something we keep building.
            </p>
          </Reveal>
          <figure className="impact-next-image">
            <img
              src={impactFuture}
              alt="Friends walking together through the city."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 35%' }}
            />
          </figure>
          <div className="impact-next-transition" aria-label="What changed next">
            <span>WHAT CHANGED?</span>
            <ArrowRight size={18} aria-hidden="true" />
            <span>WHAT CHANGES NEXT?</span>
          </div>
        </div>
      </section>

      <section className="impact-cta section-space" aria-labelledby="impact-cta-title">
        <div className="container impact-cta-layout">
          <figure className="impact-cta-image">
            <img
              src={impactCta}
              alt="Community members laughing and celebrating together."
              loading="lazy"
              decoding="async"
              style={{ objectPosition: 'center 38%' }}
            />
            <figcaption>BE PART<br />
              OF THE<br />
              IMPACT.</figcaption>
          </figure>
          <div className="impact-cta-copy">
            <Reveal>
              <p className="section-label">BE PART OF THE IMPACT</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="impact-cta-title">
                Change grows<br />
                when more of us<br />
                take part.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Help create safer spaces, stronger communities and greater opportunities for LGBTQIA+ people.
              </p>
            </Reveal>
            <div className="impact-cta-actions">
              <Link to="/" className="pill rainbow-border rainbow-border--primary">
                <BorderLight shine />Donate <ArrowUpRight size={16} />
              </Link>
              <Link to="/programmes" className="pill">
                Partner
              </Link>
              <Link to="/about" className="pill">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
