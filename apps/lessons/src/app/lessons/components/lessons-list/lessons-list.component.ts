import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-lesson-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonListComponent implements OnInit {
  @Input() lessons: [Lesson];
  @Output() selected = new EventEmitter<Lesson>();
  @Output() deleted = new EventEmitter<Lesson>();
  constructor() { }

  ngOnInit(): void {
  }

}
