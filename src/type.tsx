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
