export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  company: string;
  problem: string;
  approach: string;
  impact: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface PressFeature {
  publication: string;
  title: string;
  url: string;
  logo: string;
}

export interface Award {
  title: string;
  organization: string;
  year: number;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
