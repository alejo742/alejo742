// Project interfaces
export interface ProjectTech {
  name: string;
  icon: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  projectUrl: string;
  tags: string[];
  techStack: ProjectTech[];
}
