import type { ImageMetadata } from "astro";

export interface IAccordionItem {
  details: HTMLDetailsElement;
  summary: HTMLElement;
  content: HTMLDivElement;
  animation: Animation | null;
  isExpanding: boolean;
  isClosing: boolean;
}

export interface IExperience {
  company: string;
  position: string;
  date: string;
  achievements: string[];
  logo: ImageMetadata;
}

export interface IEducation {
  school: string;
  program: string;
  date: string;
  courses: string[];
  logo: ImageMetadata;
}

export interface ISkill {
  name: string;
  icon: string;
}
