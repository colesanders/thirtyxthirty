import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromLessons from './lessons.reducer';
import * as LessonsSelectors from './lessons.selectors';

@Injectable()
export class LessonsFacade {
  loaded$ = this.store.pipe(select(LessonsSelectors.getLessonsLoaded));
  allLessons$ = this.store.pipe(select(LessonsSelectors.getAllLessons));
  selectedLessons$ = this.store.pipe(select(LessonsSelectors.getSelected));

  constructor(private store: Store<fromLessons.LessonsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
