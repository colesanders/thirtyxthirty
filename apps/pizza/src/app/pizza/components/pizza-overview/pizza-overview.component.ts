import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Pizza } from '@thirty/api-interfaces';
import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService, SnackBarService } from '@thirty/core-data';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'thirty-pizza-overview',
  templateUrl: './pizza-overview.component.html',
  styleUrls: ['./pizza-overview.component.scss']
})
export class PizzaOverviewComponent implements OnInit, OnChanges {
  pizzaForm: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.getPizza();
  }

  ngOnChanges(): void{
    this.getPizza();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    //add toppings
    if ((value || '').trim()) {
      this.pizzaForm.value.toppings.push(value.trim() + '');
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.pizzaService.toppings = this.pizzaForm.value.toppings;
  }

  remove(topping): void {
    const index = this.pizzaForm.value.toppings.indexOf(topping);

    if (index >= 0) {
      this.pizzaForm.value.toppings.splice(index, 1);
    }
  }


  getPizza(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if(id === 0){
      this.resetForm();
    } else {
      this.pizzaService.pizza$
      .subscribe( (pizza) => {
        this.pizzaForm.patchValue(pizza);
      })
    }
    
  }

  savePizza() {
    const pizza = this.pizzaForm.value;

    this.snackBarService.openSnackBar("Saved Toppings To Current Pizza!", "Okay", 2000)

    this.pizzaService.toppings = this.pizzaForm.value.toppings;
    this.router.navigate(['/pizza']);
    console.log('made here')
  }

  createFormGroup(){
    this.pizzaForm = this.formBuilder.group({
      toppings: new FormControl(['Cheese'], [
      ]),
    })
  }

  resetForm() {
    this.pizzaForm.patchValue({});
    this.pizzaForm.value.price = 0;
    this.pizzaForm.value.toppings = ['Cheese'];
  }

}
