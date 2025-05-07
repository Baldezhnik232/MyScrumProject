export type TaskStatus = 'todo' | 'doing' | 'done';

export interface Tasks {
  tasksID: number;
  title: string;
  storyPoints: number;
  description: string;
  timestamp: string;
  status: TaskStatus;
  sprintId?: number;
  isLegacy: boolean;
  image?: File | null;
}
