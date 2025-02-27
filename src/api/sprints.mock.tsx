

import {Sprint} from './interfaceApi'

import { format, parseISO } from 'date-fns';

 export const formDate = (timestamp: string)=> {
  return format(parseISO(timestamp), 'dd.MM.yyyy');
}

export const sprintsMoks: Sprint[] = [
  {
  id: 1,
  projectId: 1,
  titleKey: "Sprint 1",
  description: "Description of Sprint A",
  timestamp: "2025-01-29T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 2,
  projectId: 1,
  titleKey: "Sprint 2",
  description: "Description of Sprint B",
  timestamp: "2025-01-30T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 3,
  projectId: 1,
  titleKey: "Sprint 3",
  description: "Description of Sprint C",
  timestamp: "2025-01-31T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 4,
  projectId: 2,
  titleKey: "Sprint 4",
  description: "Description of Sprint D",
  timestamp: "2025-02-01T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 5,
  projectId: 2,
  titleKey: "Sprint 5",
  description: "Description of Sprint E",
  timestamp: "2025-02-02T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 6,
  projectId: 2,
  titleKey: "Sprint 6",
  description: "Description of Sprint F",
  timestamp: "2025-02-03T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 7,
  projectId: 3,
  titleKey: "Sprint 7",
  description: "Description of Sprint G",
  timestamp: "2025-02-04T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 8,
  projectId: 3,
  titleKey: "Sprint 8",
  description: "Description of Sprint H",
  timestamp: "2025-02-05T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},
{
  id: 9,
  projectId: 3,
  titleKey: "Sprint 9",
  description: "Description of Sprint I",
  timestamp: "2025-02-06T10:00:00",
  TODO: [  { id: 1, title: "Task 1", description: "Description of Task 1" }],
  DOING: [{ id: 1, title: "Task 1", description: "Description of Task 1" }],
  DONE: [{ id: 1, title: "Task 1", description: "Description of Task 1" }]
},



]