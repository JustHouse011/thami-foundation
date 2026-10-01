export interface ImpactMetric {
  value?: string;
  label: string;
  description: string;
  verified: boolean;
}

export const impactMetrics: ImpactMetric[] = [
  {
    label: 'People',
    description: 'Lives supported through advocacy, community and opportunity.',
    verified: false,
  },
  {
    label: 'Communities',
    description: 'Local conversations creating wider change.',
    verified: false,
  },
  {
    label: 'Partnerships',
    description: 'Working together to strengthen collective action.',
    verified: false,
  },
  {
    label: 'Culture',
    description: 'Using visibility and storytelling to move conversations.',
    verified: false,
  },
];
