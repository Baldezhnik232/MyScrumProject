import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tasks } from '../../api/tasks/tasks.types.ts';
import { TasksState } from './tasks.types.ts';
import { fetchTasks } from './tasks.thunk.ts';

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Tasks>): void => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки задач';
      });
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
