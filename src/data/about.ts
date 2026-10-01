export interface AboutImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
}

function editorialImage(name: string, alt: string, width: number, height: number, sizes: string): AboutImage {
  const base = `/images/about/${name}`;
  return { src: `${base}.webp`, srcSet: `${base}-640.webp 640w, ${base}.webp ${width}w`, sizes, alt, width, height };
}

// Conceptual editorial imagery, not documentation of Foundation participants.
// Replace these local files with approved photography without changing components.
export const aboutImages: Record<'hero' | 'community' | 'thingolezwe' | 'belonging', AboutImage> = {
  hero: editorialImage('about-hero', 'A young Black person in sculptural cream clothing looks directly at the camera', 1024, 1536, '(max-width: 600px) calc(100vw - 48px), (max-width: 1536px) 42vw, 620px'),
  community: editorialImage('about-community', 'Friends share a lively conversation around a table in a sunlit creative space', 1536, 1024, '(max-width: 1536px) 91vw, 1400px'),
  thingolezwe: editorialImage('about-thingolezwe', 'Two friends prepare a meal together in a warm, sunlit home', 1024, 1536, '(max-width: 600px) calc(100vw - 48px), (max-width: 1536px) 44vw, 650px'),
  belonging: editorialImage('about-belonging', 'A group of friends laugh and embrace in an outdoor courtyard', 1536, 1024, '100vw'),
};

export const aboutIntro = {
  heading: ['Born from courage.', 'Built for belonging.'],
  description: 'The Thami Dish Foundation is a South African non-profit organisation working to advance dignity, opportunity, safety and belonging for LGBTQIA+ people and communities.',
  established: 'Est. 2015',
  location: 'South Africa',
  keywords: ['Dignity', 'Freedom', 'Belonging', 'Purpose'],
};

export const storyParagraphs = [
  'The Thami Dish Foundation was established in 2015 to help address social, economic and structural challenges affecting LGBTQIA+ people and communities in South Africa.',
  'What began as a commitment to visibility and advocacy has developed into work centred around dignity, education, safety, opportunity and community.',
  'Through advocacy, dialogue, education, partnerships and cultural platforms, the Foundation works toward creating environments where LGBTQIA+ people can live authentically, participate meaningfully in society and imagine futures beyond discrimination.',
];

export const whyParagraphs = [
  'For many LGBTQIA+ people, visibility does not automatically mean safety, acceptance or opportunity.',
  'Discrimination, violence, family rejection, homophobia, transphobia and social exclusion can create barriers to education, housing, employment and participation in community life.',
  'The Foundation works to help turn visibility into meaningful change by supporting spaces, conversations, opportunities and networks where people can be protected, heard and empowered.',
];

export const aboutPillars = [
  { number: '01', title: 'Advocacy & empowerment', description: 'Advancing LGBTQIA+ rights while supporting young people and marginalised communities to live with greater dignity, confidence and opportunity.' },
  { number: '02', title: 'Safe spaces & support', description: 'Supporting environments where vulnerable members of the community can access safety, resources, guidance and a sense of belonging.' },
  { number: '03', title: 'Education & dialogue', description: 'Using community dialogues, workshops, outreach and education to challenge homophobia, transphobia, misinformation and social exclusion.' },
  { number: '04', title: 'Community & connection', description: 'Building networks between communities, civil society, human-rights organisations and partners to strengthen collective action in South Africa and across the continent.' },
];

export const safeHaven = {
  name: 'Thingolezwe',
  description: 'Thingolezwe represents the Foundation’s commitment to creating safer support systems for LGBTQIA+ people experiencing rejection, discrimination, violence or housing insecurity.',
  principle: 'Before people can thrive, they need somewhere they can feel safe.',
  labels: ['Shelter', 'Support', 'Dignity'],
};

export const workingMethods = [
  { title: 'Educate', description: 'Community dialogues, sensitisation programmes, workshops and outreach help create greater understanding of gender and sexual diversity.' },
  { title: 'Advocate', description: 'Working with communities, institutions and partners to strengthen LGBTQIA+ visibility, protection, participation and human rights.' },
  { title: 'Empower', description: 'Supporting education, mentorship, resources and opportunities that allow LGBTQIA+ people to build futures on their own terms.' },
  { title: 'Connect', description: 'Bringing together communities, organisations, movements and partners to strengthen collective action locally, nationally and globally.' },
];

export const leadership: {
  name: string;
  publicName: string;
  role: string;
  organisation: string;
  portrait: AboutImage | null;
  biography: string[];
} = {
  name: 'Thami Kotlolo',
  publicName: 'Thami Dish',
  role: 'Founder',
  organisation: 'Thami Dish Foundation',
  // Only set to an authentic, licensed or Foundation-provided portrait of Thami.
  portrait: null,
  biography: [
    'Thami Kotlolo, widely known as Thami Dish, is a South African media personality, social entrepreneur and LGBTQIA+ activist whose work sits at the intersection of advocacy, culture, media and fashion.',
    'As founder of the Thami Dish Foundation, his work has focused on creating greater visibility, conversation and opportunity for LGBTQIA+ communities.',
    'His wider cultural work, including his association with the Feather Awards, demonstrates a belief that culture can be more than entertainment.',
  ],
};

// Dates and narrative supplied in the About-page brief; ready for editorial review.
export const timeline = [
  { year: '2015', title: 'Foundation established', description: 'The Thami Dish Foundation begins its work focused on social inclusion, advocacy and issues affecting LGBTQIA+ communities.' },
  { year: '2018', title: 'Global LGBTIQ+ Network', description: 'A platform for dialogue, networking and conversations around issues affecting LGBTQIA+ communities locally and internationally.' },
  { year: '2019', title: 'Thingolezwe', description: 'The safe-haven initiative draws attention to the need for shelter, protection and support for LGBTQIA+ people facing rejection and housing insecurity.' },
  { year: '2020s', title: 'Dialogue & partnership', description: 'Community conversations, advocacy, educational work and collaborations continue strengthening the Foundation’s wider network.' },
  { year: 'Today', title: 'Building what comes next', description: 'The Foundation continues connecting advocacy, education, culture and community in pursuit of a safer and more inclusive Africa.' },
];

export const aboutVision = {
  description: 'We imagine a continent where LGBTQIA+ people are not merely tolerated, but recognised, protected, represented and able to participate fully in the social, cultural and economic life of their communities.',
  words: ['Safer.', 'Bolder.', 'Brighter.'],
};
