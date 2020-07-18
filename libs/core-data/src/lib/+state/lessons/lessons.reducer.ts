import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as LessonsActions from './lessons.actions';
import { LessonsEntity } from './lessons.models';
import {Observable} from 'rxjs'
import {Lesson} from '@thirty/api-interfaces';

export const LESSONS_FEATURE_KEY = 'lessons';

export interface State extends EntityState<LessonsEntity> {
  selectedId?: string | number; // which Lessons record has been selected
  loaded: boolean; // has the Lessons list been loaded
  error?: string | null; // last none error (if any)
}

export interface LessonsPartialState {
  readonly [LESSONS_FEATURE_KEY]: State;
}

export const lessonsAdapter: EntityAdapter<LessonsEntity> = createEntityAdapter<
  LessonsEntity
>();

export const initialState: State = lessonsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const _lessonsReducer = createReducer(
  initialState,
  on(LessonsActions.loadLessons, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(LessonsActions.loadLessonsSuccess, (state, { lessons }) =>
    lessonsAdapter.setAll(lessons, { ...state, loaded: true })
  ),
  on(LessonsActions.loadLessonsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function lessonsReducer(state: State | undefined, action: Action) {
  return _lessonsReducer(state, action);
}
