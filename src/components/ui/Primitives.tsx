import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export const ease = [0.16, 1, 0.3, 1] as const;
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.15}} transition={{duration:reduced?0:0.85,delay:reduced?0:delay,ease}}>{children}</motion.div> }
export function SectionLabel({children}:{children:ReactNode}) {return <p className="section-label">{children}</p>}
export function Logo({onNavigate}:{onNavigate?:()=>void}={}){return <Link to="/" onClick={onNavigate} className="logo" aria-label="Thami Dish Foundation home"><img src="/TD%20Logo.svg" alt="Thami Dish Foundation" className="logo-mark" /></Link>} 

