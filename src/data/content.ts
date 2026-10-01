import { Heart, Users, Hand, CircleArrowRight } from 'lucide-react';
export const images = { hero: '/images/hero-foundation.webp', manifesto: '/images/manifesto-portrait.webp' };
export const navigationItems = [ {label:'Home',href:'/'}, {label:'About',href:'/about'}, {label:'Programmes',href:'/programmes'}, {label:'Feather Awards',href:'/feather-awards'}, {label:'Impact',href:'/impact'}, {label:'Get Involved',href:'/#get-involved'} ];
export const impactStats = [ {value:'10+',label:'Years of advocacy'}, {value:'5,000+',label:'Young people supported'}, {value:'30+',label:'Communities reached'}, {value:'50+',label:'Partners and collaborators'} ];
export interface Platform { id:string; title:string; description:string; image:string; alt:string; detail:string }
export const ecosystemPlatforms: Platform[] = [
{id:'awards',title:'Feather Awards',description:'Celebrating the people\nmoving culture.',image:'/images/feather-awards.webp',alt:'Editorial portrait in a sculptural golden feather headpiece',detail:'A celebration of courage, creativity and the people making visibility possible. The Feather Awards brings culture and community together to recognise voices that move us forward.'},
{id:'festival',title:'Feathers Festival',description:'Our culture. Our sound.\nOur stage.',image:'/images/feathers-festival.webp',alt:'A festival crowd with raised hands under magenta stage lights',detail:'A space to come together through music, expression and shared joy. Feathers Festival puts community at the centre of the cultural experience.'},
{id:'fashion',title:'Fashion Stage',description:'Disrupt. Deconstruct.\nDegender.',image:'/images/fashion-stage.webp',alt:'Black fashion model in a sculptural black garment',detail:'Style is a language of possibility. Fashion Stage celebrates self-expression and challenges the boundaries of who fashion is for.'},
{id:'network',title:'Global LGBTQIA+ Network',description:'African voices.\nGlobal conversations.',image:'/images/global-network.webp',alt:'The African continent illuminated on Earth at night',detail:'Local perspectives belong in global conversations. A platform for connection, shared learning and solidarity across communities and borders.'}
];
export const getInvolvedOptions = [ {id:'Donate',icon:Heart,text:'Fund programmes and opportunities.'}, {id:'Partner',icon:Users,text:'Collaborate for greater impact.'}, {id:'Volunteer',icon:Hand,text:'Contribute your skills and time.'}, {id:'Join',icon:CircleArrowRight,text:'Be part of the community.'} ];
export const socialLinks = ['Instagram','X','Facebook','YouTube','LinkedIn'];



