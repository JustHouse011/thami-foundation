import { BorderLight } from '../ui/BorderLight';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import { RainbowIcon } from '../ui/RainbowIcon';
import type { Overlay } from '../ui/SiteOverlay';
const socials = [{ name: 'Instagram', icon: Instagram }, { name: 'X', icon: null }, { name: 'Facebook', icon: Facebook }, { name: 'YouTube', icon: Youtube }, { name: 'LinkedIn', icon: Linkedin }];
export function Footer({ onOpen }: { onOpen: (overlay: Overlay) => void }) {
  return <footer className="site-footer"><div className="container footer-editorial-inner">
    <div className="footer-invitation"><p>A brighter,<br />braver Africa<br />starts with us.</p><Link to="/#get-involved" className="pill rainbow-border rainbow-border--primary"><BorderLight shine />Be part of it <RainbowIcon><ArrowUpRight size={20} /></RainbowIcon></Link></div>
    <div className="footer-connections"><nav aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/programmes">Programmes</Link><Link to="/impact">Impact</Link><Link to="/feather-awards">Feather Awards</Link><Link to="/#stories">Stories</Link><button onClick={() => onOpen({ type: 'involve', kind: 'Contact' })}>Contact</button></nav><div className="social-icons">{socials.map(({ name, icon: Icon }) => <button className="icon-button" key={name} aria-label={name} onClick={() => onOpen({ type: 'social', name })}><RainbowIcon>{Icon ? <Icon size={18} strokeWidth={1.7} /> : <span className="x-icon">𝕏</span>}</RainbowIcon></button>)}</div></div>
    <Link to="/" className="footer-wordmark" aria-label="Thami Dish Foundation home">THAMI DISH<br />FOUNDATION.</Link>
    <div className="footer-bottom"><span>© 2026 Thami Dish Foundation | Developed by Bongani Nombamba</span><span>People. Purpose. Culture. Change.</span></div>
  </div></footer>;
}
