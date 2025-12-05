export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}