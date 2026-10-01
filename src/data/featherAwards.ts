import type { EditorialImageAsset } from '../components/ui/EditorialImage';

export const featherImages = {
  hero: { src: '/images/f9.jpg', alt: 'Wide event scene from the Feather Awards.', position: '50% 38%' },
  intro: { src: '/images/f1.jpg', alt: 'A moment from the Feather Awards.', position: '50% 45%' },
  'red-carpet-01': { src: '/images/f3.jpg', alt: 'Guest photographed in an expressive Feather Awards look.', position: '50% 24%' },
  'red-carpet-02': { src: '/images/f4.jpg', alt: 'Guest photographed in an expressive Feather Awards look.', position: '50% 28%' },
  'red-carpet-03': { src: '/images/f5.jpg', alt: 'Guest photographed in an expressive Feather Awards look.', position: '50% 26%' },
  'stage-wide': { src: '/images/f10.jpg', alt: 'A wide event scene from the Feather Awards.', position: '50% 45%' },
  recognition: { src: '/images/f6.jpg', alt: 'A portrait from the Feather Awards.', position: '50% 24%' },
  culture: { src: '/images/f2.jpg', alt: 'A Feather Awards event scene.', position: '55% 48%' },
  'fashion-01': { src: '/images/f8.jpg', alt: 'Guest wearing an expressive event look.', position: '50% 23%' },
  'fashion-02': { src: '/images/f11.jpg', alt: 'A portrait showing event styling.', position: '50% 27%' },
  people: { src: '/images/f12.jpg', alt: 'People gathered at the Feather Awards.', position: '50% 50%' },
  community: { src: '/images/f13.jpg', alt: 'Attendees share a moment at the Feather Awards.', position: '50% 45%' },
  'celebration-wide': { src: '/images/f7.jpg', alt: 'Guests celebrating at the Feather Awards.', position: '50% 48%' },
  cta: { src: '/images/f14.jpg', alt: 'A portrait from the Feather Awards.', position: '50% 24%' },
} satisfies Record<string, EditorialImageAsset>;

export type FeatherImageKey = keyof typeof featherImages;
