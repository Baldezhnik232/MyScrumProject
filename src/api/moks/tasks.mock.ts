import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};


export const tasksMocks: Tasks[] = [
  {
    tasksID: 1,
    status: 'todo',
  },
  {
    tasksID: 2,
    status: 'doing',
  },
  {
    tasksID: 3,
    status: 'done',
  },

  
];
