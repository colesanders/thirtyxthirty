import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Pizza } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit, OnChanges {
  @Input() pizza: Pizza;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  starDisplay: number[];
  pizzaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnChanges(){
    if(this.pizzaForm){
      this.pizzaForm.patchValue(this.pizza)
    }
    
  }

  resetForm() {
    this.pizzaForm.patchValue({});
  }

  createFormGroup(){
    this.pizzaForm = this.formBuilder.group({
      id: [],

      crust: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      cheese: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      sauce: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      toppings: new FormControl([''], [
      ]),
      price: new FormControl(0, [
      ])
    })
  }
}
