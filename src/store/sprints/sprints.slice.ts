import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sprint } from '../../api/sprints/sprints.types.ts';
import { fetchSprints } from '../sprints/sprints.thunk.ts';
import { SprintsState } from './sprints.types.ts';

const initialState: SprintsState = {
  sprints: [],
  filterSprints: '',
  loading: false,
  error: null,
};

const sprintsSlice = createSlice({
  name: 'sprints',
  initialState,
  reducers: {
    addSprints: (state, action: PayloadAction<Sprint>) => {
      state.sprints.push(action.payload);
    },
    removeSprints: (state, action: PayloadAction<number>) => {
      state.sprints = state.sprints.filter((sprint) => sprint.sprintId !== action.payload);
    },
  },
  extraReducers: (builder): void => {
    builder
      .addCase(fetchSprints.pending, (state): void => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSprints.fulfilled, (state, action): void => {
        state.sprints = action.payload;
        state.loading = false;
      })
      .addCase(fetchSprints.rejected, (state, action): void => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export const { addSprints, removeSprints } = sprintsSlice.actions;
export default sprintsSlice.reducer;
