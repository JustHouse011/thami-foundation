import { getInvolvedOptions } from './content';

export interface ProgrammeImage {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
}

function image(name: string, alt: string, portrait = false, fullWidth = false): ProgrammeImage {
  const base = `/images/programmes/${name}`;
  const width = portrait ? 1024 : 1536;
  return {
    src: `${base}.webp`,
    srcSet: `${base}-640.webp 640w, ${base}.webp ${width}w`,
    sizes: fullWidth ? '100vw' : '(max-width: 600px) calc(100vw - 48px), (max-width: 1536px) 50vw, 720px',
    alt, width, height: portrait ? 1536 : 1024,
  };
}

// Conceptual scenes. Replace with approved Foundation photography when available.
export const programmeImages = {
  hero: image('programmes-hero', 'Young creatives exchange ideas and arrange fabric around a shared studio worktable'),
  advocacy: image('advocacy', 'A community speaker gestures as other participants listen in a discussion'),
  education: image('education-dialogue', 'Workshop participants sit in a circle while one person contributes to the conversation', false, true),
  safety: image('thingolezwe', 'Two friends share tea and a quiet conversation in a sunlit home', true),
  empowerment: image('youth-empowerment', 'A fashion designer pins burgundy fabric onto a dress form in a working studio', true),
  community: image('community-network', 'Community members share ideas in small groups at an outdoor gathering', false, true),
  cultureFashion: image('culture-01', 'A performer moves across a runway in a flowing sculptural outfit', true),
  cultureStage: image('culture-02', 'A vocalist and dancers perform under magenta and violet stage lighting'),
  cultureAudience: image('culture-03', 'Audience members smile and applaud during a cultural performance'),
  joy: image('programmes-community-wide', 'Friends dance and laugh together in a courtyard at sunset', false, true),
};

export interface Programme {
  id: string;
  number: string;
  shortLabel: string;
  indexTitle: string;
  eyebrow: string;
  title: string[];
  body: string[];
  image: ProgrammeImage;
  keywords: string[];
}

export const programmes: Programme[] = [
  {
    id: 'advocacy', number: '01', shortLabel: 'Advocacy', indexTitle: 'Advocacy & human rights', eyebrow: 'Advocacy & human rights',
    title: ['Visibility should', 'lead to equality.'],
    body: [
      'Advocacy sits at the heart of the Foundation’s work.',
      'Through public dialogue, community engagement, partnerships and cultural platforms, the Foundation works to challenge discrimination and strengthen understanding of LGBTQIA+ rights.',
      'The goal is not visibility for visibility’s sake. It is a society where LGBTQIA+ people can participate openly, safely and equally.',
    ],
    image: programmeImages.advocacy, keywords: ['Voice', 'Rights', 'Representation'],
  },
  {
    id: 'education', number: '02', shortLabel: 'Education', indexTitle: 'Education & dialogue', eyebrow: 'Education & dialogue',
    title: ['Understanding', 'changes communities.'],
    body: [
      'Education creates space for difficult conversations to become meaningful ones.',
      'Through community dialogues, workshops, outreach and awareness initiatives, the Foundation supports greater understanding of gender identity, sexual diversity, inclusion and human rights.',
      'These conversations help challenge misinformation, homophobia, transphobia and social exclusion.',
    ],
    image: programmeImages.education, keywords: ['Listen.', 'Learn.', 'Understand.', 'Change.'],
  },
  {
    id: 'safe-spaces', number: '03', shortLabel: 'Safety', indexTitle: 'Safe spaces & Thingolezwe', eyebrow: 'Safe spaces',
    title: ['Safety is not', 'a privilege.', 'It is the beginning', 'of possibility.'],
    body: [
      'Thingolezwe reflects the Foundation’s commitment to safer support systems for LGBTQIA+ people who experience rejection, discrimination, violence or housing insecurity.',
      'The principle behind the initiative is fundamental: people need more than visibility.',
      'They need somewhere they can feel protected, supported and able to begin again.',
    ],
    image: programmeImages.safety, keywords: ['Shelter', 'Safety', 'Support', 'Dignity', 'Belonging'],
  },
  {
    id: 'empowerment', number: '04', shortLabel: 'Empowerment', indexTitle: 'Youth empowerment & opportunity', eyebrow: 'Youth empowerment',
    title: ['Opportunity changes', 'what people believe', 'is possible.'],
    body: [
      'Empowerment means creating pathways that allow young LGBTQIA+ people to develop confidence, skills, knowledge and greater independence.',
      'The Foundation’s wider work around education, mentorship, support and opportunity is grounded in the belief that inclusion must extend beyond representation.',
      'People should have the tools and opportunities to build their own futures.',
    ],
    image: programmeImages.empowerment, keywords: ['Learn.', 'Grow.', 'Create.', 'Lead.'],
  },
  {
    id: 'community', number: '05', shortLabel: 'Community', indexTitle: 'Community & network building', eyebrow: 'Community & connection',
    title: ['No movement', 'moves alone.'],
    body: [
      'Progress becomes stronger when communities, organisations and movements are connected.',
      'The Foundation works alongside civil society, human-rights organisations, cultural platforms, community leaders and allies to strengthen networks of support and collective action.',
      'These relationships help bridge social gaps and create spaces where gender and sexual diversity can be understood within African social contexts.',
    ],
    image: programmeImages.community, keywords: ['Local voices.', 'Global conversations.'],
  },
];

export const programmesIntro = {
  hero: 'Our programmes turn advocacy into action — creating safer spaces, stronger communities and greater opportunities for LGBTQIA+ people.',
  secondary: 'From community dialogue to safe havens, we work where dignity needs action.',
  body: 'The Thami Dish Foundation works across advocacy, education, safety, empowerment and community building to help create environments where LGBTQIA+ people can live with dignity and participate fully in society.',
  connections: ['Safety affects education.', 'Education affects opportunity.', 'Opportunity affects independence.', 'And community makes all of them stronger.'],
};

export const cultureCopy = [
  'Media, fashion, music, celebration and storytelling have the power to move ideas beyond formal advocacy.',
  'The Foundation’s relationship with cultural platforms demonstrates how visibility can create conversations that reach audiences traditional advocacy may not.',
];

export const programmeApproach = [
  { title: 'Safety', description: 'People need environments where they can exist without fear.' },
  { title: 'Education', description: 'Understanding challenges prejudice and creates stronger communities.' },
  { title: 'Opportunity', description: 'Access gives people greater control over their futures.' },
  { title: 'Community', description: 'Connection creates support, visibility and collective strength.' },
  { title: 'Change', description: 'Together these conditions help create a more inclusive society.' },
];

const involvementCopy: Record<string, string> = {
  Donate: 'Help fund programmes and opportunities.',
  Partner: 'Work with us to extend our impact.',
  Volunteer: 'Contribute your skills, time and experience.',
};
export const programmeInvolvement = getInvolvedOptions
  .filter(option => option.id in involvementCopy)
  .map(option => ({ ...option, text: involvementCopy[option.id] }));
