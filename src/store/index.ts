import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import sprintsReducer from "./sprintsSlice"
import tasksReducer from "./tasksSlice";
import backlogReducer from "./backlogSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    backlog: backlogReducer,
    sprints: sprintsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;