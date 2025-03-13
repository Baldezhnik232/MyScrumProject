import { Tasks } from '../types/interfaceApi.tsx';
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};


export const tasksMocks: Tasks[] = [
  { id: 1, status: '📝 To Do'},
  { id: 1, status: '📝 To Do'},
  { id: 1, status: '📝 To Do'},
  { id: 2, status: '📝 To Do'},
  { id: 2, status: '📝 To Do'},
  { id: 2, status: '📝 To Do'},
  { id: 3, status: '📝 To Do'},
  { id: 3, status: '📝 To Do'},
  { id: 3, status: '📝 To Do'},
  { id: 1, status: '🚀 Doing'},
  { id: 1, status: '🚀 Doing'},
  { id: 1, status: '🚀 Doing'},
  { id: 2, status: '🚀 Doing'},
  { id: 2, status: '🚀 Doing'},
  { id: 2, status: '🚀 Doing'},
  { id: 3, status: '🚀 Doing'},
  { id: 3, status: '🚀 Doing'},
  { id: 3, status: '🚀 Doing'},
  { id: 1, status: '🚀 Done'},
  { id: 1, status: '🚀 Done'},
  { id: 1, status: '🚀 Done'},
  { id: 2, status: '🚀 Done'},
  { id: 2, status: '🚀 Done'},
  { id: 2, status: '🚀 Done'},
  { id: 3, status: '🚀 Done'},
  { id: 3, status: '🚀 Done'},
  { id: 3, status: '🚀 Done'}
  
  
];
