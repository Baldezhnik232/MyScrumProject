

import {Tasks} from '../types/interfaceApi.tsx'
import { format, parseISO } from 'date-fns';

 export const formDate = (timestamp: string): string => {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const tasksMocks: Tasks[] = [ {
  tasksID: 1,
  title: 'TODO',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 1,
    title: 'Doing',
  description: 'Description of Task B',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 1,
    title: 'Done',
  description: 'Description of Task C',
  timestamp: "2025-01-29T10:00:00"
  }, 
  {
  tasksID: 2,
    title: 'TODO',
  description: 'Description of Task d',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 2,
    title: 'Doing',
  description: 'Description of Task v',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 2,
    title: 'Done',
  description: 'Description of Task c',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 3,
    title: 'TODO',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 3,
    title: 'Doing',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  tasksID: 3,
    title: 'Done',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  }   
]
