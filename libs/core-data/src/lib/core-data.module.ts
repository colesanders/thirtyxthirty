import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLessons from './+state/lessons/lessons.reducer';
import { LessonsEffects } from './+state/lessons/lessons.effects';
import { LessonsFacade } from './+state/lessons/lessons.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromLessons.LESSONS_FEATURE_KEY,
      fromLessons.lessonsReducer
    ),
    EffectsModule.forFeature([LessonsEffects]),
  ],
  providers: [LessonsFacade],
})
export class CoreDataModule {}
