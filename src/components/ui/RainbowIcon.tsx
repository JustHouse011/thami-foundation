import { useId, type ReactNode } from 'react';

export function RainbowIcon({ children }: { children: ReactNode }) {
  const id = `spectrum-${useId().replace(/:/g, '')}`;
  return <span className="rainbow-icon" aria-hidden="true">
    <svg className="rainbow-icon-defs" width="0" height="0"><defs><linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#f86c9e" /><stop offset=".25" stopColor="#dbad46" /><stop offset=".5" stopColor="#44b5a1" /><stop offset=".75" stopColor="#769ef4" /><stop offset="1" stopColor="#cc82dc" /></linearGradient></defs></svg>
    <span style={{ stroke: `url(#${id})` }}>{children}</span>
  </span>;
}
