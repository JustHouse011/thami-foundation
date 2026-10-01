import type { Overlay } from '../components/ui/SiteOverlay';
import { Hero } from '../components/sections/Hero';
import { Purpose } from '../components/sections/Purpose';
import { Ecosystem } from '../components/sections/Ecosystem';
import { Manifesto } from '../components/sections/Manifesto';
import { GetInvolved } from '../components/sections/GetInvolved';
export function Home({onOpen}:{onOpen:(overlay:Overlay)=>void}){return <main id="main" tabIndex={-1}><Hero onStory={()=>onOpen({type:'story'})}/><Purpose/><Ecosystem onPlatform={platform=>onOpen({type:'platform',platform})}/><Manifesto/><GetInvolved onSelect={kind=>onOpen({type:'involve',kind})}/></main>}
