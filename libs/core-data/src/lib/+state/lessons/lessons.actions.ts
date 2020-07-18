import { createAction, props } from '@ngrx/store';
import { LessonsEntity } from './lessons.models';

export const loadLessons = createAction('[Lessons] Load Lessons');

export const loadLessonsSuccess = createAction(
  '[Lessons] Load Lessons Success',
  props<{ lessons: LessonsEntity[] }>()
);

export const loadLessonsFailure = createAction(
  '[Lessons] Load Lessons Failure',
  props<{ error: any }>()
);
