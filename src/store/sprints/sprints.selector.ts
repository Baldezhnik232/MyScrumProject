import { RootState } from '../../store';

import { createSelector } from '@reduxjs/toolkit';

const selectSprintsState = (state: RootState) => state.sprints;

export const selectSprinstItems = createSelector(selectSprintsState, (s) => s.sprints);

export const selectSprintsFiltered = createSelector(selectSprintsState, (sf) => sf.filterSprints);

export const selectSprintsLoading = createSelector(selectSprintsState, (sl) => sl.loading);

export const selectSprintsError = createSelector(selectSprintsState, (se) => se.error);

export const selectFilteredSprints = createSelector(
  [selectSprinstItems, selectSprintsFiltered],
  (sprint, filter) => {
    sprint.filter((s) => {
      s.title.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
