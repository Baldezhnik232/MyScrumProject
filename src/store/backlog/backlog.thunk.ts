import { createAsyncThunk } from '@reduxjs/toolkit';
import { backlogMoksApi } from '../../api/backlog/backlog.api.ts';
import { Backlog } from '../../api/backlog/backlog.types.ts';

export const fetchBacklog = createAsyncThunk<Backlog[]>('backlog/fetchBacklog', async () => {
  const response = await backlogMoksApi.getBacklog();
  return response;
});
