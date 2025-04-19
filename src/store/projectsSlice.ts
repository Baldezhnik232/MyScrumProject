import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { projectsAPI } from "../api/index";
import { Project } from "../api/types/interfaceApi.tsx";

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  const response = await projectsAPI.getProjects({});
  return response;
});

export interface ProjectsState {
  projects: Project[],
  filterProject: string, 
  loading: boolean,
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  filterProject: '',
  loading: false,
  error: null
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setFilterProject:(state, action: PayloadAction<string>): void=> {
      state.filterProject = action.payload
    }
  },
  extraReducers: (builder): void => {
    builder
      .addCase(fetchProjects.pending, (state): void => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>): void => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action): void => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки";
      });
  },
});
export const { setFilterProject } = projectsSlice.actions;
export default projectsSlice.reducer;