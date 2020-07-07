import { Component, OnInit } from '@angular/core';
import { Lesson } from '@thirty/api-interfaces';
import { LessonsService } from '@thirty/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'thirty-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Lessons';
  selectedLesson: Lesson;
  lessons$: Observable<Lesson[]>;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteLesson(lesson:Lesson) {
    this.lessonsService.deleteLesson(lesson)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveLesson(lesson: Lesson) {
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
    this.resetForm();
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
      percentComplete : 0,
    }
  }

}