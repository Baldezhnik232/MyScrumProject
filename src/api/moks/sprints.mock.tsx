import { Sprint } from '../types/interfaceApi.tsx';

import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
};

export const sprintsMoks: Sprint[] = [
  {
    projectId: 1,
    sprintId: 1, 
    tasksID: [1], 
    title: 'Sprint 1',
    description: 'Description of Sprint A',
    timestamp: '2025-01-29T10:00:00',
    
  },
  {
    projectId: 1,
    sprintId: 2,
    tasksID: [2],
    title: 'Sprint 2',
    description: 'Description of Sprint B',
    timestamp: '2025-01-30T10:00:00'
  },
  {
    projectId: 1,
    sprintId:3,
    tasksID: [3],
    title: 'Sprint 3',
    description: 'Description of Sprint C',
    timestamp: '2025-01-31T10:00:00'
  },
  { 
    projectId: 2,
    sprintId:4,
    tasksID: [4],
    title: 'Sprint 4',
    description: 'Description of Sprint D',
    timestamp: '2025-02-01T10:00:00'
  },
  {
    projectId: 2,
    sprintId:5,
    tasksID: [5],
    title: 'Sprint 5',
    description: 'Description of Sprint E',
    timestamp: '2025-02-02T10:00:00'
  },
  {
    projectId: 2,
    sprintId:6,
    tasksID: [6],
    title: 'Sprint 6',
    description: 'Description of Sprint F',
    timestamp: '2025-02-03T10:00:00'
  },
  {
    projectId: 3,
    sprintId:7,
    tasksID: [7],
    title: 'Sprint 7',
    description: 'Description of Sprint G',
    timestamp: '2025-02-04T10:00:00'
  },
  {
    projectId: 3,
    sprintId:8,
    tasksID: [8],
    title: 'Sprint 8',
    description: 'Description of Sprint H',
    timestamp: '2025-02-05T10:00:00'
  },
  {
    projectId: 3,
    sprintId:9,
    tasksID: [9],
    title: 'Sprint 9',
    description: 'Description of Sprint I',
    timestamp: '2025-02-06T10:00:00'
  },
];
