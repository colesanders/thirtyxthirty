import { Component, OnInit } from '@angular/core';
import { Pizza } from '@thirty/api-interfaces';
import { PizzaService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'thirty-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  title = 'Pizza Store';
  pizzas$: Observable<Pizza[]>;
  pizza$: Observable<Pizza>;

  links = [
    { path: ['/pizza'], title: 'Home' },
    { path: ['/pizza', 0], title: 'Topping Manager' }
  ];

  constructor(private router: Router,
    private pizzaService: PizzaService, 
    public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deletePizza(pizza:Pizza) {
    this.pizzaService.deletePizza(pizza)
    .subscribe( m => {
      this.refresh();
    });
  }

  savePizza(pizza: Pizza) {
    this.snackBarService.openSnackBar("Pizza Saved!", "Okay", 2000)

    console.log(pizza);

    if(pizza.id !== null){
      this.pizzaService.updatePizza(pizza)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.pizzaService.createPizza(pizza)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadPizzas();
  }

  selectPizza(pizza: Pizza) {
    this.links[1].path = ['/pizza', pizza.id];
    this.pizzaService.setPizzaById(pizza.id);
    this.pizza$ = this.pizzaService.pizza$;
    this.router.navigate(this.links[1].path);
  }

  loadPizzas(): void{
    this.pizzas$ = this.pizzaService.getPizzas();
  }

  cancel(){
    this.links[1].path = ['/pizza', 0];
    this.router.navigate(this.links[0].path);
  }
}
