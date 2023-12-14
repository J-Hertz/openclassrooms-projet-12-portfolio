import { SocialMediaUrls } from '../type';
import { PersonalDetails } from '../type';
import { EduDetails } from '../type';
import { ContactDetails } from '../type';
import { TechStackDetails } from '../type';
import { ProjectDetails } from '../type';

export async function getPersonalDetails(): Promise<PersonalDetails> {
  const response = await fetch('data/personalDetails.json');
  const data = await response.json();
  return data;
}

export async function getSocialMediaUrl(): Promise<SocialMediaUrls> {
  const response = await fetch('data/socialMediaUrl.json');
  const data: SocialMediaUrls = await response.json();
  return data;
}

export async function getEduDetails(): Promise<EduDetails[]> {
  const response = await fetch('data/eduDetails.json');
  const data = await response.json();
  return data;
}

export async function getTechStackDetails(): Promise<TechStackDetails> {
  const response = await fetch('data/techStackDetails.json');
  const data = await response.json();
  return data;
}

export async function getProjectDetails(): Promise<ProjectDetails[]> {
  const response = await fetch('data/projectDetails.json');
  const data = await response.json();
  return data;
}

export async function getContactDetails(): Promise<ContactDetails> {
  const response = await fetch('data/contactDetails.json');
  const data = await response.json();
  return data;
}
