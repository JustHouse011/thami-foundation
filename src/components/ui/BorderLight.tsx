/** Extra decorative layers for feature cards and primary CTAs; never affect layout. */
export function BorderLight({ shine = false }: { shine?: boolean }) {
  return <>
    <span className="rainbow-border-light" aria-hidden="true" />
    {shine && <span className="rainbow-border-shine" aria-hidden="true" />}
  </>;
}
