import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Lesson } from '@thirty/api-interfaces';
import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonsService, SnackBarService } from '@thirty/core-data';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'thirty-lesson-overview',
  templateUrl: './lessons-overview.component.html',
  styleUrls: ['./lessons-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit, OnChanges {
  lessonForm: FormGroup;

  

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.getLesson();
  }

  ngOnChanges(): void{
    this.getLesson();
  }


  getLesson(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if(id === 0){
      this.resetForm();
    } else {
      this.lessonsService.lesson$
      .subscribe( (lesson) => {
        this.lessonForm.patchValue(lesson);
      })
    }
    
  }

  saveLesson() {
    const lesson = this.lessonForm.value;

    this.snackBarService.openSnackBar("Saved Toppings To Current Lesson!", "Okay", 2000)

    this.router.navigate(['/lesson']);
  }

  createFormGroup(){
    this.lessonForm = this.formBuilder.group({
      extras: new FormControl(['None'], [
      ]),
    })
  }

  resetForm() {
    this.lessonForm.value.extras = ['None'];
  }

}
