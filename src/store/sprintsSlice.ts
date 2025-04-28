import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Sprint} from '../api/types/interfaceApi.tsx'
import { sprintsMoksApi } from "../api/index";


 export const fetchSprints = createAsyncThunk("sprints/fetchSprints",async (): Promise<Sprint[]>=> {
    const response: Sprint[] =  await sprintsMoksApi.getSprints({})
      return response
 }) 


 

export interface SprintsState {
    sprints: Sprint[],
    filterSprints: string,
    loading: boolean,
    error: string | null
}
 

const initialState: SprintsState = {
  sprints: [],
  filterSprints: '',
  loading: false,
  error: null,
};

const sprintsSlice = createSlice({
  name:'sprints',
  initialState,
  reducers: {
    addSprints: (state, action: PayloadAction<Sprint>)=>{
      state.sprints.push(action.payload)
    },
    removeSprints: (state, action: PayloadAction<number>) => {
      state.sprints = state.sprints.filter(
        (sprint) => sprint.sprintId !== action.payload
      );
    },
    
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


export const {addSprints, removeSprints} = sprintsSlice.actions;
export default sprintsSlice.reducer