import { Project } from '../../api/projects/projects.types';

export interface ProjectsState {
  projects: Project[];
  filterProject: string;
  loading: boolean;
  error: string | null;
}
