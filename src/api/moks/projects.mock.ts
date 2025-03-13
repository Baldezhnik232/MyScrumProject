import {Project} from '../types/interfaceApi.tsx'
import { format, parseISO } from 'date-fns';

export const formDate = (timestamp: string): string=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const projectsMocks: Project[]= [
  {
    id: 1,
    title: "Project A",
    description: "Description of Project A",
    timestamp: "2025-01-27T10:00:00",
  },
  {
    id: 2,
    title: "Project B",
    description: "Description of Project B",
    timestamp: "2025-01-28T10:00:00",
  },
  {
    id: 3,
    title: "Project C",
    description: "Description of Project C",
    timestamp: "2025-01-29T10:00:00",
  },
];


