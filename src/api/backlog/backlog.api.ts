import { backlogMocks } from './backlog.mock.ts';
import { Backlog } from './backlog.types.ts';

export const backlogMoksApi = {
  getBacklog: (): Promise<Backlog[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve([...backlogMocks.tasks]);
      }, 1000);
    });
  },

  removeTaskFromBacklog: async (tasksID: number): Promise<void> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        backlogMocks.tasks = backlogMocks.tasks.filter((task) => task.tasksID !== tasksID);
        resolve();
      }, 500);
    });
  },
};
