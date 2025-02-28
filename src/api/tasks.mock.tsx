

import {Tasks} from '../api/interfaceApi'
import { format, parseISO } from 'date-fns';

 export const formDate = (timestamp: string)=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const tasksMocks: Tasks[] = [ {
  id: 1,
  tasksID: 1,
  titleKey: 'TODO',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 2,
  tasksID: 1,
  titleKey: 'Doing',
  description: 'Description of Task B',
  timestamp: "2025-01-29T10:00:00"
  },
  { 
  id: 3,
  tasksID: 1,
  titleKey: 'Done',
  description: 'Description of Task C',
  timestamp: "2025-01-29T10:00:00"
  }, 
  {
  id: 4,
  tasksID: 2,
  titleKey: 'TODO',
  description: 'Description of Task d',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 5,
  tasksID: 2,
  titleKey: 'Doing',
  description: 'Description of Task v',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 6,
  tasksID: 2,
  titleKey: 'Done',
  description: 'Description of Task c',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 7,
  tasksID: 3,
  titleKey: 'TODO',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 8,
  tasksID: 3,
  titleKey: 'Doing',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  },
  {
  id: 9,
  tasksID: 3,
  titleKey: 'Done',
  description: 'Description of Task A',
  timestamp: "2025-01-29T10:00:00"
  }   
]