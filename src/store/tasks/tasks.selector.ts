import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const selectTasksSelector = (state: RootState) => state.tasks;

export const selectTasksItems = createSelector(selectTasksSelector, (t) => t.tasks);

export const selectTasksLoading = createSelector(selectTasksSelector, (tl) => tl.loading);

export const selectTasksError = createSelector(selectTasksSelector, (te) => te.error);
