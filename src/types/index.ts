import type { ImageMetadata } from "astro";

export type Nullable<T> = T | null;

export type AccordionItem = {
  details: HTMLDetailsElement;
  summary: HTMLElement;
  content: HTMLDivElement;
  animation: Nullable<Animation>;
  isExpanding: boolean;
  isClosing: boolean;
};

export type Experience = {
  company: string;
  position: string;
  date: string;
  achievements: string[];
  logo: ImageMetadata;
};

export type Education = {
  school: string;
  program: string;
  date: string;
  courses: string[];
  logo: ImageMetadata;
};

export type Skill = {
  name: string;
  icon: string;
};
