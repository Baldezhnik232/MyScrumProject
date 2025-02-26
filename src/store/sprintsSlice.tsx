import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Sprint} from '../api/interfaceApi'
import { sprintsMoksApi } from "../api/index";


 export const fetchSprints = createAsyncThunk("sprints/fetchSprints",async ()=> {
    const response =  await sprintsMoksApi.getSprints({})
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
    addSprint: (state, action: PayloadAction<Sprint>)=>{
      state.sprints.push(action.payload)
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(fetchSprints.pending,(state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSprints.fulfilled,(state, action)=> {
      state.sprints = action.payload;
      state.loading = false;
    })
    .addCase(fetchSprints.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.error.message || "Ошибка загрузки" ;

    })
    
  }
})


export const {addSprint} = sprintsSlice.actions;
export default sprintsSlice.reducer