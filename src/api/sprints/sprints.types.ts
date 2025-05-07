import { Project } from '../projects/projects.types';

export interface Sprint extends Omit<Project, 'id'> {
  projectId: number;
  sprintId: number;
}
