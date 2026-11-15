// These types describe content, not Angular behavior. Add a project in projects.ts.
export type ProjectStatus =
  | 'In Progress'
  | 'Completed'
  | 'Paused'
  | 'Archived'
  | 'Upcoming';
export type ProjectCategory =
  | 'Course'
  | 'Organization'
  | 'Hobbyist'
  | 'Software';

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  fit?: 'cover' | 'contain';
  position?: string;
}

export interface ProjectSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Project {
  id: string; // Used in /projects/project-id. Keep existing IDs when editing titles.
  title: string;
  summary: string;
  category: ProjectCategory;
  focus: string[];
  tools: string[];
  status: ProjectStatus;
  stage?: string;
  context: string;
  role: string;
  problem: string;
  sections: ProjectSection[];
  images?: ProjectImage[];
  links?: { label: string; url: string }[];
  video?: string;
  metrics?: { label: string; value: string; context: string }[];
  limitation?: string;
  parentId?: string; // Supporting IC studies are grouped inside their collection.
  relatedIds?: string[];
}
