import { Tasks } from '../../api/tasks/tasks.types.ts';

export interface TasksState {
  tasks: Tasks[];
  loading: boolean;
  error: string | null;
}
