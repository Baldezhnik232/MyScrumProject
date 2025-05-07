import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projects.slice';
import sprintsReducer from './sprints/sprints.slice';
import tasksReducer from './tasks/tasks.slice';
import backlogReducer from './backlog/backlog.slice';
import authSlice from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    backlog: backlogReducer,
    sprints: sprintsReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
