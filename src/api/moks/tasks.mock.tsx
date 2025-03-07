import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};



export const tasksMocks: Tasks[] = [
  {
    tasksID: 1,
    title: 'TODO',
    status: 'todo',
    sprintId: 1
  },
  {
    tasksID: 1,
    title: 'Doing',
    status: 'todo',
    sprintId: 1
  },
  {
    tasksID: 1,
    title: 'Done',
    status: 'todo',
    sprintId: 1
  },
  {
    tasksID: 2,
    title: 'TODO',
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 2,
    title: 'Doing',
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 2,
    title: 'Done',
    status: 'doing',
    sprintId: 2
  },
  {
    tasksID: 3,
    title: 'TODO',
    status: 'done',
    sprintId: 3
  },
  {
    tasksID: 3,
    title: 'Doing',
    status: 'done',
    sprintId: 3
  },
  {
    tasksID: 3,
    title: 'Done',
    status: 'done',
    sprintId: 3
  },

];
