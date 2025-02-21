import {Backlog} from './interfaceApi'

import { format, parseISO } from 'date-fns';

 export const formDate = (timestamp: string)=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}



export const backlogMocks: Backlog[] = [ 
  {
    id: 1,
    titleKey: "Task #1",
    storyPoints: 3,
    description: "Description of Task 1",
    timestamp: "2025-03-01T10:00:00"
  },
  {
    id: 2,
    titleKey: "Task #2",
    storyPoints: 5,
    description: "Description of Task 2",
    timestamp: "2025-03-02T10:00:00"
  },
  {
    id: 3,
    titleKey: "Task #3",
    storyPoints: 1,
    description: "Description of Task 3",
    timestamp: "2025-03-03T10:00:00"
  }
];