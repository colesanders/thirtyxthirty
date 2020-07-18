import { Component, OnInit, OnChanges } from '@angular/core';
import { Lesson } from '@thirty/api-interfaces';
import { LessonsService, SnackBarService, lessonsReducer} from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { loadLessons } from '@thirty/core-data'
import { Store, select } from '@ngrx/store'

@Component({
  selector: 'thirty-lesson',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonComponent implements OnInit{
  title = 'Lesson Store';
  lessons$: Observable<Lesson[]>;
  lesson$: Observable<Lesson>;

  links = [
    { path: ['/lesson'], title: 'Home' },
  ];

  constructor(private router: Router,
    private lessonsService: LessonsService, 
    public snackBarService: SnackBarService,
    private store: Store<{ lessons: Lesson[] }>) { 
      
    }

  ngOnInit(): void {
    this.lessons$ = this.store.pipe(select('lessons'));

    this.store.dispatch(loadLessons());
    
  }

  deleteLesson(lesson:Lesson) {
    this.lessonsService.deleteLesson(lesson)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveLesson(lesson: Lesson) {
    this.snackBarService.openSnackBar("Lesson Saved!", "Okay", 2000)



    if(lesson.id !== null){
      this.lessonsService.updateLesson(lesson)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.lessonsService.createLesson(lesson)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadLessons();
  }

  selectLesson(lesson: Lesson) {
    this.lessonsService.setLessonById(lesson.id);
    this.lesson$ = this.lessonsService.lesson$;
  }

  loadLessons(): void{
    this.lessons$ = this.lessonsService.getLessons();
  }

  cancel(){
    this.lessonsService.setLessonBlank();
  }
}
