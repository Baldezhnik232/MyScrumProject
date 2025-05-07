import { RootState } from '../../store';

import { createSelector } from '@reduxjs/toolkit';

const selectBacklogState = (state: RootState) => state.backlog;

export const selectBacklogItems = createSelector(selectBacklogState, (b) => b.backlog);

export const selectBacklogToSprints = createSelector(selectBacklogState, (bs) => bs.sprints);

export const selectBacklogFiltered = createSelector(selectBacklogState, (bf) => bf.filterBacklog);

export const selectBacklogLoading = createSelector(selectBacklogState, (bl) => bl.loading);

export const selectBacklogError = createSelector(selectBacklogState, (be) => be.error);

export const selectFilteredBacklog = createSelector(
  [selectBacklogItems, selectBacklogFiltered],
  (items, filter) =>
    items.filter((items) => items.title.toLowerCase().includes(filter.toLowerCase()))
);
