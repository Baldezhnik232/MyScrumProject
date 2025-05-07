import { RootState } from '../../store';

import { createSelector } from '@reduxjs/toolkit';

const selectProjectsSelector = (state: RootState) => state.projects;

export const selectProjectsItems = createSelector(selectProjectsSelector, (p) => p.projects);

export const selectProjectsFiltered = createSelector(
  selectProjectsSelector,
  (pf) => pf.filterProject
);

export const selectProjectsLoading = createSelector(selectProjectsSelector, (pl) => pl.loading);

export const selectProjectError = createSelector(selectProjectsSelector, (pe) => pe.error);

export const selectFilteredProjects = createSelector(
  [selectProjectsItems, selectProjectsFiltered],
  (projects, filter) => {
    projects.filter((items) => {
      items.title.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
