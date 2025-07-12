import { createAsyncThunk } from '@reduxjs/toolkit';
import { tasksMocksApi } from '../../api/tasks/tasks.api.ts';
import { Tasks } from '../../api/tasks/tasks.types.ts';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (): Promise<Tasks[]> => {
  const response: Tasks[] = await tasksMocksApi.getTasks({});
  return response;
});
