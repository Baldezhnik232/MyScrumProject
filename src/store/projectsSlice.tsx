import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { projectsAPI } from "../api/index";
import { Project } from "../api/interfaceApi";

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  const response = await projectsAPI.getProjects({});
  return response;
});

interface ProjectsState {
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
    setFilterProject:(state, action: PayloadAction<string>)=> {
      state.filterProject = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки";
      });
  },
});
export const { setFilterProject } = projectsSlice.actions;
export default projectsSlice.reducer;