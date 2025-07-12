import { Backlog } from '../../api/backlog/backlog.types';

export interface BacklogState {
  backlog: Backlog[];
  sprints: Backlog[];
  filterBacklog: string;
  loading: boolean;
  error: string | null;
}
