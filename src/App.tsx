import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SiteOverlay, type Overlay } from './components/ui/SiteOverlay';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programmes } from './pages/Programmes';
import { FeatherAwards } from './pages/FeatherAwards';
import { HeartBurst } from './components/ui/HeartBurst';
import { Impact } from './pages/Impact';
import { RouteEffects } from './components/layout/RouteEffects';

export default function App() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  return (
    <MotionConfig reducedMotion="user">
      <RouteEffects />
      <HeartBurst />
      <Header onOpen={setOverlay} />
      <Routes>
        <Route path="/" element={<Home onOpen={setOverlay} />} />
        <Route path="/about" element={<About onOpen={setOverlay} />} />
        <Route path="/programmes" element={<Programmes onOpen={setOverlay} />} />
        <Route path="/feather-awards" element={<FeatherAwards onOpen={setOverlay} />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="*" element={<main className="not-found container"><p className="section-label">404 / A different direction</p><h1>Let’s find your way.</h1><Link className="pill" to="/">Back to the foundation</Link></main>} />
      </Routes>
      <Footer onOpen={setOverlay} />
      {overlay && <SiteOverlay key={overlay.type + ('kind' in overlay ? overlay.kind : '')} overlay={overlay} onClose={() => setOverlay(null)} onChange={setOverlay} />}
    </MotionConfig>
  );
}
