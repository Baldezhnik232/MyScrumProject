import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};


export const tasksMocks: Tasks[] = [
  {
    tasksID: 1,
    title:"Task #1",
    storyPoints: 3,
    description: "Description of Task 1",
    timestamp: "2025-03-01T10:00:00",
    isLegacy: true,
    status: 'todo',
  },
  {
    tasksID: 2,
    title: "Task #2",
    storyPoints: 5,
    description: "Description of Task 2",
    timestamp: "2025-03-02T10:00:00",
    isLegacy: true,
    status: 'doing',
  },
  {
    tasksID: 3,
    title: "Task #3",
    storyPoints: 1,
    description: "Description of Task 3",
    timestamp: "2025-03-03T10:00:00",
    isLegacy: true,
    status: 'done',
  }
];
