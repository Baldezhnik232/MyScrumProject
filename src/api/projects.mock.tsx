import {Project} from './interfaceApi'
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string)=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const projectsMocks: Project[]= [
  {
    id: 1,
    titleKey: "Project A",
    description: "Description of Project A",
    timestamp: "2025-01-27T10:00:00",
  },
  {
    id: 2,
    titleKey: "Project B",
    description: "Description of Project B",
    timestamp: "2025-01-28T10:00:00",
  },
  {
    id: 3,
    titleKey: "Project C",
    description: "Description of Project C",
    timestamp: "2025-01-29T10:00:00",
  },
];


