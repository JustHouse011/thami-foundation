import type { EditorialImageAsset } from '../components/ui/EditorialImage';

// Only client-approved, locally supplied event photographs belong in this directory.
// Glob imports resolve real files only; missing assets intentionally have no src.
const files = import.meta.glob<string>('../assets/images/feather-awards/*.{jpg,jpeg,webp,avif,png}', { eager: true, query: '?url', import: 'default' });
const descriptions = {
  'hero': 'Guests celebrating at the Feather Awards.',
  'intro': 'Guests sharing a conversation at the Feather Awards.',
  'red-carpet-01': 'Guest photographed in an expressive red-carpet look.',
  'red-carpet-02': 'Guests sharing a moment on the red carpet.',
  'red-carpet-detail': 'Fashion detail photographed at the event.',
  'stage-wide': 'Performer on stage beneath dramatic event lighting.',
  'stage-close': 'Performer captured during a stage performance.',
  'recognition': 'Award recipient celebrating during a recognition moment.',
  'culture': 'Guests taking part in the Feather Awards.',
  'fashion-01': 'A full-length red-carpet fashion look.',
  'fashion-02': 'A portrait showing a guest’s event styling.',
  'fashion-detail': 'A detail of event clothing and accessories.',
  'people': 'Guests and community members celebrating together.',
  'history': 'An archival moment from the Feather Awards.',
  'backstage': 'Participants preparing behind the scenes.',
  'community': 'Community members sharing a moment at the event.',
  'celebration-wide': 'Audience members celebrating together.',
  'cta': 'Friends sharing a celebration at the Feather Awards.',
} as const;
export type FeatherImageKey = keyof typeof descriptions;
export const featherImages = Object.fromEntries(Object.entries(descriptions).map(([key, alt]) => {
  const src = Object.entries(files).find(([path]) => path.replace(/\.[^.]+$/, '').endsWith(`/feather-${key}`))?.[1];
  return [key, { src, alt, available: Boolean(src), position: '50% 50%' }];
})) as Record<FeatherImageKey, EditorialImageAsset & { available: boolean }>;
