import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'framer-motion';

type Burst = { id: number; x: number; y: number; count: number };
export function HeartBurst() {
  const reduced = useReducedMotion();
  const [bursts, setBursts] = useState<Burst[]>([]);
  useEffect(() => {
    if (reduced) return;
    let sequence = 0;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const click = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest('[disabled]')) return;
      const rect = target.getBoundingClientRect();
      const burst = { id: ++sequence, x: event.detail === 0 ? rect.left + rect.width / 2 : event.clientX, y: event.detail === 0 ? rect.top + rect.height / 2 : event.clientY, count: Boolean(target.closest('.pill')) ? 7 : 4 };
      setBursts(current => [...current.slice(-5), burst]);
      const timer = setTimeout(() => { setBursts(current => current.filter(item => item.id !== burst.id)); timers.delete(timer); }, 1150);
      timers.add(timer);
    };
    document.addEventListener('click', click, true);
    return () => { document.removeEventListener('click', click, true); timers.forEach(clearTimeout); };
  }, [reduced]);
  if (reduced) return null;
  return createPortal(<div className="heart-bursts" aria-hidden="true">{bursts.map(burst => <span key={burst.id} style={{ position: 'absolute', left: burst.x, top: burst.y }}>{Array.from({ length: burst.count }, (_, index) => <motion.span className="heart-particle" key={index} initial={{ opacity: 1, scale: .65, x: 0, y: 0 }} animate={{ opacity: 0, scale: 1.2, x: Math.cos(index * Math.PI * 2 / burst.count) * 105, y: -65 + Math.sin(index * Math.PI * 2 / burst.count) * 85 }} transition={{ duration: 1.1, ease: 'easeOut' }}>♥</motion.span>)}</span>)}</div>, document.querySelector('dialog[open]') || document.body);
}

