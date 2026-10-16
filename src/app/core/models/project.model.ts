export type ProjectStatus = 'completed' | 'in-progress';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;

  image?: string;
  githubUrl?: string;
  liveUrl?: string;

  problem: string;
  solution: string;
  challenges: string[];
}