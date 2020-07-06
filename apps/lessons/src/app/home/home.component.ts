import { Component, OnInit } from '@angular/core';
import { Lesson } from '@first-app/api-interfaces';
import { LessonsService } from '@first-app/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'first-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Lessons';
  selectedLesson: Lesson;
  lessons$: Observable<Lesson[]>;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.loadLessons();
    this.resetForm();
  }

  deleteLesson(lesson:Lesson) {
    this.lessonsService.deleteLesson(lesson);
    this.resetForm();
    this.loadLessons();
  }

  saveLesson(lesson: Lesson) {
    if(lesson.id !== null){
      this.lessonsService.updateLesson(lesson);
    } else {
      this.lessonsService.createLesson(lesson);
    }
    this.resetForm();
    this.loadLessons();
  }

  resetForm(){
    this.selectLesson(this.getBlankLesson());
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = {...lesson};
  }

  loadLessons(): void{
    this.lessons$ = this.lessonsService.getLessons();
  }

  getBlankLesson() {
    return {
      id: null,
      title: "",
      description: "",
      favorite : false,
    }
  }

}
