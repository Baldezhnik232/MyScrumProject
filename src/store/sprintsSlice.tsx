import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Sprint} from '../api/types/interfaceApi.tsx'
import { sprintsMoksApi } from "../api/index";


 export const fetchSprints = createAsyncThunk("sprints/fetchSprints",async (): Promise<Sprint[]>=> {
    const response: Sprint[] =  await sprintsMoksApi.getSprints({})
      return response
 })  


 
interface SprintsState {
    sprints: Sprint[],
    loading: boolean,
    error: string | null
}
 

const initialState: SprintsState = {
  sprints: [],
  loading: false,
  error: null
}

const sprintsSlice = createSlice({
  name:'sprints',
  initialState,
  reducers: {
    addSprint: (state, action: PayloadAction<Sprint>): void=>{
      state.sprints.push(action.payload)
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


export const {addSprint} = sprintsSlice.actions;
export default sprintsSlice.reducer