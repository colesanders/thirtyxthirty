import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LESSONS_FEATURE_KEY,
  State,
  LessonsPartialState,
  lessonsAdapter,
} from './lessons.reducer';

// Lookup the 'Lessons' feature state managed by NgRx
export const getLessonsState = createFeatureSelector<
  LessonsPartialState,
  State
>(LESSONS_FEATURE_KEY);

const { selectAll, selectEntities } = lessonsAdapter.getSelectors();

export const getLessonsLoaded = createSelector(
  getLessonsState,
  (state: State) => state.loaded
);

export const getLessonsError = createSelector(
  getLessonsState,
  (state: State) => state.error
);

export const getAllLessons = createSelector(getLessonsState, (state: State) =>
  selectAll(state)
);

export const getLessonsEntities = createSelector(
  getLessonsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getLessonsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getLessonsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
