import { projectsMocks } from './projects.mock.ts';
import { Project } from './projects.types.ts';
import { IApiFilterParams } from '../shared/shared.types.ts';

export const projectsAPI = {
  getProjects: async (_filters: IApiFilterParams): Promise<Project[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(projectsMocks);
      }, 1000);
    });
  },
};
