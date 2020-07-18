import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromLessons from './lessons.reducer';
import * as LessonsActions from './lessons.actions';
import { LessonsService } from './lessons.service'
import { LessonsEntity } from './lessons.models';

@Injectable({
  providedIn: 'root'
})
export class LessonsEffects {
  loadLessons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LessonsActions.loadLessons),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          let lessons: LessonsEntity[];

          this.lessonsService.getLessons()
          .subscribe((data)=> {
            lessons = data;
          })

          return LessonsActions.loadLessonsSuccess({ lessons });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return LessonsActions.loadLessonsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions,
              private lessonsService: LessonsService) {}
}
