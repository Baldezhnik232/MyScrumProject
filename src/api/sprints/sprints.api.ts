import { sprintsMoks } from './sprints.mock.ts';
import { Sprint } from '../sprints/sprints.types.ts';

export const sprintsMoksApi = {
  getSprints: async (): Promise<Sprint[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(sprintsMoks);
      }, 1000);
    });
  },
  deleteSprintApi: async (sprintId: number): Promise<Sprint[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(sprintsMoks);
      }, 100);
    });
  },
};
