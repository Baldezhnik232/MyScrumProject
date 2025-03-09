import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};


export const tasksMocks: Tasks[] = [
  {
    
    id: 1,
    status: '📝 To Do',
    sprintId: 1
  },
  {
   
    id: 1,
    status: '📝 To Do',
    sprintId: 1
  },
  {

    id: 1,
    status: '📝 To Do',
    sprintId: 1
  },
  {

    id: 2,
    status: '🚀 Doing',
    sprintId: 2
  },
  {
    id: 3,
    status: '🚀 Doing',
    sprintId: 3
  }
  
  
];
