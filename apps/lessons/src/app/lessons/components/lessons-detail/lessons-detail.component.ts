import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Lesson } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-lesson-detail',
  templateUrl: './lessons-detail.component.html',
  styleUrls: ['./lessons-detail.component.scss']
})
export class LessonDetailComponent implements OnInit, OnChanges {
  @Input() lesson: Lesson;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  starDisplay: number[];
  lessonForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnChanges(){
    if(this.lessonForm){
      this.lessonForm.patchValue(this.lesson)
    }
    
  }

  resetForm() {
    this.lessonForm.patchValue({});
  }

  createFormGroup(){
    this.lessonForm = this.formBuilder.group({
      id: [],

      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      percentComplete: new FormControl(0, [
        Validators.required,
      ]),
      favorite: new FormControl(false, [
      ])
    })
  }
}
