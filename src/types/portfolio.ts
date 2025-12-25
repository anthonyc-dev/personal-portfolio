export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  imageUrl?: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon?: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    subtitle: string;
  };
  about: {
    description: string;
    highlights: string[];
  };
  skills: Skill[];
  projects: Project[];
  contact: {
    description: string;
    links: ContactLink[];
  };
}
