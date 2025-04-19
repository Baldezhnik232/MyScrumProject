import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import sprintsReducer from "./sprintsSlice"
import tasksReducer from "./tasksSlice";
import backlogReducer from "./backlogSlice";
import authSlice from "./authSlice";

export  const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    backlog: backlogReducer,
    sprints: sprintsReducer,
    auth: authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;