import { StaticImageData } from "next/image";

export interface TeamMember {
  id: number;
  since?: string;
  name: string;
  position: string;
  image: StaticImageData | string;
  className?: string;
  colClass?: string;
  wrapClass?: string;
  mbClass?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  link: string;
}

/** Extended team member for detail page */
export interface TeamMemberDetail extends TeamMember {
  slug: string;
  detailImage?: StaticImageData;
  phone?: string;
  email?: string;
  bio?: string;
  details?: {
    location?: string;
    age?: string;
    qualification?: string;
    gender?: string;
  };
  experience?: string[];
  skills?: { name: string; percentage: number }[];
  stats?: {
    projectsCompleted?: number;
    achievements?: number;
    yearsExperience?: number;
    happyCustomers?: number;
  };
}