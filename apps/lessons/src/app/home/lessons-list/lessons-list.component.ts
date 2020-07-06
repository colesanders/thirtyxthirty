import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '@first-app/api-interfaces';

@Component({
  selector: 'first-app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  @Input() lessons: [Lesson];
  @Output() selected = new EventEmitter<Lesson>();
  @Output() deleted = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
