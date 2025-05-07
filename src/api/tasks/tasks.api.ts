import { tasksMocks } from './tasks.mock.ts';
import { Tasks } from './tasks.types.ts';
import { IApiFilterParams } from '../shared/shared.types.ts';

export const tasksMocksApi = {
  getTasks: async (_filters: IApiFilterParams): Promise<Tasks[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(tasksMocks);
      }, 1000);
    });
  },
};
