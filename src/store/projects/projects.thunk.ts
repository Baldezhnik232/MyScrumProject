import { createAsyncThunk } from '@reduxjs/toolkit';
import { Project } from '../../api/projects/projects.types';
import { projectsAPI } from '../../api/projects/projects.api';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (): Promise<Project[]> => {
    const response = await projectsAPI.getProjects({});
    return response;
  }
);
