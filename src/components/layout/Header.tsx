import { BorderLight } from '../ui/BorderLight';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, Search, ArrowUpRight } from 'lucide-react';
import { RainbowIcon } from '../ui/RainbowIcon';
import { Logo } from '../ui/Primitives';
import { Dialog } from '../ui/Dialog';
import { navigationItems, socialLinks } from '../../data/content';
import type { Overlay } from '../ui/SiteOverlay';

const MotionLink = motion.create(Link);

export function Header({ onOpen }: { onOpen: (overlay: Overlay) => void }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 25);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <motion.header initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className={`site-header ${scrolled ? 'scrolled' : ''} ${pathname.startsWith('/feather-awards') ? 'header-dark' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationItems.map(item => <Link key={item.label} to={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button search-button" aria-label="Search the foundation" onClick={() => onOpen({ type: 'search' })}><RainbowIcon><Search size={21} strokeWidth={1.5} /></RainbowIcon></button>
          <button className="pill donate-button rainbow-border rainbow-border--primary" onClick={() => onOpen({ type: 'involve', kind: 'Donate' })}><BorderLight shine />Donate</button>
          <button className="icon-button" aria-label="Open menu" aria-expanded={menu} aria-haspopup="dialog" onClick={() => setMenu(true)}><RainbowIcon><Menu size={29} strokeWidth={1.2} /></RainbowIcon></button>
        </div>
      </div>
    </motion.header>
    {menu && <Dialog title="Main menu" onClose={() => setMenu(false)} className="menu-dialog">
      <Logo onNavigate={() => setMenu(false)} />
      <nav aria-label="Expanded navigation">
        {navigationItems.map((item, index) => <MotionLink
          initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : index * 0.07 }} to={item.href}
          aria-current={pathname === item.href ? 'page' : undefined} key={item.label} onClick={() => setMenu(false)}>
          <span>0{index + 1}</span>{item.label}<RainbowIcon><ArrowUpRight /></RainbowIcon>
        </MotionLink>)}
      </nav>
      <div className="menu-socials">{socialLinks.map(name => <button key={name} onClick={() => { setMenu(false); onOpen({ type: 'social', name }); }}>{name}</button>)}</div>
      <p className="section-label">A brighter, braver Africa</p>
    </Dialog>}
  </>;
}
