

import {Sprint} from './interfaceApi'

import { format, parseISO } from 'date-fns';

 export const formDate = (timestamp: string)=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const sprintsMoks: Sprint[] = [
  {
  id: 1,
  titleKey: "Sprint 1",
  description: "Description of Sprint A",
  timestamp: "2025-01-29T10:00:00",
  TODO: [],
  DOING: [],
  DONE: []
},
{
  id: 1,
  titleKey: "Sprint 1",
  description: "Description of Sprint B",
  timestamp: "2025-01-29T10:00:00",
  TODO: [],
  DOING: [],
  DONE: []
},
{
  id: 1,
  titleKey: "Sprint 1",
  description: "Description of Sprint C",
  timestamp: "2025-01-29T10:00:00",
  TODO: [],
  DOING: [],
  DONE: []
}

]