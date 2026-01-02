import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  year: number;
}

export interface Expertise {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  points: string[];
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  socials?: {
    platform: 'linkedin' | 'twitter' | 'github' | 'instagram';
    url: string;
  }[];
}

export interface Blog {
  id: string;
  title: string;
  userName: string;
  userTech: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export interface TimelineData {
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
}


