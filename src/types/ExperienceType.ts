interface ExperienceType {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
}

export type { ExperienceType };
