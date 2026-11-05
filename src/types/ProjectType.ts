interface ProjectType {
  image: string;
  name: string;
  date?: string;
  tech: string[];
  links: {
    GitHub?: string;
    Live?: string;
  };
  about: string;
  role: string;
}

export type { ProjectType };
