export interface HeaderProps {}

export interface ProjectProps {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string | null;
  showPreviewLink: boolean;
  githubLink: string;
}

export interface WorkProps {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
}

export interface SocialMediaUrls {
  linkedin: string;
  github: string;
}

export interface PersonalDetails {
  name: string;
  tagline: string;
  img: string;
  about: string;
}

export interface EduDetails {
  Position: string;
  Company: string;
  Location: string;
  Type: string;
  Duration: string;
}

export interface ContactDetails {
  email: string;
}

export interface TechStackDetails {
  html: string;
  css: string;
  js: string;
  react: string;
  redux: string;
  sass: string;
  vscode: string;
  postman: string;
  npm: string;
  git: string;
  github: string;
  figma: string;
  reactRouter: string;
}

export interface ProjectDetails {
  title: string;
  image: string;
  desc: string;
  date: string;
  techstack: string[];
  technoImg: string[];
  githublink: string;
  previewlink?: string | null;
  showPreviewlink?: boolean;
}
