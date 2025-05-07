import { createAsyncThunk } from '@reduxjs/toolkit';
import { sprintsMoksApi } from '../../api/sprints/sprints.api.ts';
import { Sprint } from '../../api/sprints/sprints.types.ts';

export const fetchSprints = createAsyncThunk(
  'sprints/fetchSprints',
  async (): Promise<Sprint[]> => {
    const response: Sprint[] = await sprintsMoksApi.getSprints();
    return response;
  }
);
