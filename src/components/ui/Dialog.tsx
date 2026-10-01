import { RainbowIcon } from './RainbowIcon';
import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
export function Dialog({title,children,onClose,className=''}:{title:string;children:ReactNode;onClose:()=>void;className?:string}) {
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const previous=document.activeElement as HTMLElement|null;const dialog=ref.current;dialog?.showModal();const before=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog?.close();document.body.style.overflow=before;previous?.focus()}},[]);
 return <dialog ref={ref} aria-label={title} className={`dialog ${className}`} onCancel={onClose} onKeyDown={e=>{if(e.key!=='Tab')return;const focusable=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),[tabindex="0"]')).filter(el=>el.getClientRects().length>0);const first=focusable[0];const last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="dialog-inner"><button className="icon-button dialog-close" aria-label="Close dialog" onClick={onClose}><RainbowIcon><X/></RainbowIcon></button>{children}</div></dialog>
}
