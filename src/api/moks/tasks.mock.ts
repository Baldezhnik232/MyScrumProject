import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};


export const tasksMocks: Tasks[] = [
  {
    tasksID: 1,
    status: 'todo',
    sprintId: 1
  },
  {
    tasksID: 2,
    status: 'todo',
    sprintId: 2
  },
  {
    tasksID: 3,
    status: 'todo',
    sprintId: 3
  },
  {
    tasksID: 2,
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 2,
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 2,
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 3,
    status: 'done',
    sprintId: 3
  },
  {
    tasksID: 3,
    status: 'done',
    sprintId: 3
  },
  {
    tasksID: 3,
    status: 'done',
    sprintId: 3
  },
  


];
