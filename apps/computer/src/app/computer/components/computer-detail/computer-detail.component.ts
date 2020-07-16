import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Computer } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit, OnChanges {
  @Input() computer: Computer;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  starDisplay: number[];
  computerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnChanges(){
    if(this.computerForm){
      this.computerForm.patchValue(this.computer)
    }
    
  }

  resetForm() {
    this.computerForm.patchValue({});
  }

  createFormGroup(){
    this.computerForm = this.formBuilder.group({
      id: [],

      cpu: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      gpu: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      ram: new FormControl(0, [
        Validators.required,
      ]),
      price: new FormControl(0, [
      ])
    })
  }
}
