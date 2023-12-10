// Enter all your details in this file
// project JSON
import project from './assets/projects.json';
// Logo images
import logogradient from './assets/logo.svg';
import logo from './assets/logo2.svg';
// Profile Image
import profile from './assets/images/memoji.png';
// Tech stack images
import html from './assets/techstack/html.png';
import css from './assets/techstack/css.png';
import sass from './assets/techstack/sass.png';
import js from './assets/techstack/js.png';
import react from './assets/techstack/react.png';
import redux from './assets/techstack/redux.png';
import vscode from './assets/techstack/vscode.png';
import github from './assets/techstack/github.png';
import git from './assets/techstack/git.png';
import npm from './assets/techstack/npm.png';
import postman from './assets/techstack/postman.png';
import figma from './assets/techstack/figma.png';
import reactRouter from './assets/techstack/react-router.png';
// Project Images.
import projectImage1 from './assets/images/p3-booki.png';
import projectImage2 from './assets/images/p4-ohmyfood.png';
import projectImage3 from './assets/images/p5-printit.png';
import projectImage4 from './assets/images/p6-sophiebluel.png';
import projectImage5 from './assets/images/p8-kasa.png';
import projectImage6 from './assets/images/p9-ninacarducci.png';
import projectImage7 from './assets/images/p10-77events.png';
import projectImage8 from './assets/images/p12-argentbank.png';

// Logos
export const logos: Record<string, string> = {
  logogradient,
  logo,
};

// Enter your Personal Details here
export const personalDetails: Record<string, string | number> = {
  name: 'Jonathan Hertz',
  tagline: 'Developpeur Front-End',
  img: profile,
  about:
    "j'ai suivi la formation d'intégrateur web chez OpenClassrooms pour développer mes compétences en développement front-end. Mon objectif est d'obtenir un CDI dans un poste de développeur front-end en entreprise.",
};

// Enter your Social Media URLs here
export const socialMediaUrl: Record<string, string> = {
  linkedin: 'https://www.linkedin.com/in/jonathan-hertz-427b752a3/',
  github: 'https://www.github.com/J-Hertz',
};

// Enter your Education Details here
export const eduDetails: Record<string, string>[] = [
  {
    Position: 'Formation Intégrateur Web',
    Company: 'OpenClassrooms',
    Location: 'Formation en ligne',
    Type: 'Temps plein',
    Duration: 'Mars 2023 - Présent',
  },
];

// Tech Stack and Tools
export const techStackDetails: Record<string, string> = {
  html,
  css,
  js,
  react,
  redux,
  sass,
  vscode,
  postman,
  npm,
  git,
  github,
  figma,
  reactRouter,
};

// Enter your Project Details here
export const projectDetails: {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string | null;
  githubLink: string;
}[] = project.map((proj, index) => {
  // Create an array with all project images
  const projectImages = [
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
    projectImage5,
    projectImage6,
    projectImage7,
    projectImage8,

    // Add more if needed
  ];

  return {
    title: proj.title,
    image: projectImages[index],
    description: proj.desc,
    techstack: proj.techno.join(', '),
    previewLink: proj.preview || null,
    githubLink: proj.link,
  };
});

// Enter your Contact Details here
export const contactDetails: Record<string, string> = {
  email: 'jonath.hertz@gmail.com',
};
