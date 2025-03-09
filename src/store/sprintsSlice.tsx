import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Sprint, Tasks} from '../api/types/interfaceApi.tsx'
import { sprintsMoksApi } from "../api/index";


 export const fetchSprints = createAsyncThunk("sprints/fetchSprints",async (): Promise<Sprint[]>=> {
    const response: Sprint[] =  await sprintsMoksApi.getSprints({})
      return response
 })  

interface SprintsState {
    sprints: Sprint[],
    tasks: Tasks[],
    loading: boolean,
    error: string | null
}
 

const initialState: SprintsState = {
  sprints: [],
  tasks: [],
  loading: false,
  error: null,
};

const sprintsSlice = createSlice({
  name:'sprints',
  initialState,
  reducers: {
    moveTaskToSprint: (state, action: PayloadAction<{ task: Tasks, tasksID: number }>) => {
      const sprint = state.sprints.find(s => s.tasksID === action.payload.tasksID);
      if (sprint) {
          sprint.id.push(action.payload.task);
      }
  }
    
  },
  extraReducers:(builder): void=> {
    builder
    .addCase(fetchSprints.pending,(state): void=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSprints.fulfilled,(state, action): void=> {
      state.sprints = action.payload;
      state.loading = false;
    })
    .addCase(fetchSprints.rejected, (state, action):void=> {
      state.loading = false;
      state.error = action.error.message || "Ошибка загрузки" ;

    })
    
  }
})

export const {moveTaskToSprint} = sprintsSlice.actions;

export default sprintsSlice.reducer