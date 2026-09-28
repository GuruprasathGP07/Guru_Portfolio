export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  keyFeatures?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
  location?: string;
}

export interface CPStat {
  platform: string;
  handle: string;
  rating: number;
  maxLabel: string;
  solved: number;
  extra?: string;
  profileUrl: string;
  iconName: string;
  chartData?: { subject: string; score: number; fullMark: number }[];
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  badge?: string;
  highlight?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CurrentlyLearning {
  topics: string[];
  targetInternships: string;
  upcomingHackathons: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  codolioUrl: string;
  resumeUrl?: string;
}

export interface PersonalDetails {
  name: string;
  roles: string[];
  tagline: string;
  about: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
  };
}
