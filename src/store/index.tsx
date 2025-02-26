import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import sprintsReducer from "./sprintsSlice"

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    sprints: sprintsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;