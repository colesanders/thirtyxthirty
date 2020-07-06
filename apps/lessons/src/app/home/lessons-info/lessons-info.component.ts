import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '@first-app/api-interfaces';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'first-app-lessons-info',
  templateUrl: './lessons-info.component.html',
  styleUrls: ['./lessons-info.component.scss']
})
export class LessonsInfoComponent implements OnInit {
  @Input() lesson: Lesson;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

}
