import { Sprint } from '../../api/sprints/sprints.types';

export interface SprintsState {
  sprints: Sprint[];
  filterSprints: string;
  loading: boolean;
  error: string | null;
}
