import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '@thirty/api-interfaces';
import { Observable, BehaviorSubject} from 'rxjs';
import * as Rx from "rxjs";

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public blankPizza:Pizza = {
    id: null,
    sauce: "",
    crust: "",
    cheese: "",
    toppings: [''],
    price: 0
  }

  private m_pizza$ = new Rx.BehaviorSubject<Pizza>(this.blankPizza);

  get pizza$(): Observable<Pizza> {
    return this.m_pizza$.asObservable();
  }

  set toppings(toppings){
    this.m_pizza$.value.toppings = toppings;
  }

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<[Pizza]> {
    return this.http.get<[Pizza]>(BASE_URL);
  }

  getPizzaById(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(BASE_URL + "/" + id);
  }

  setPizzaById(id: number) {
    this.getPizzaById(id).subscribe(pizza => {
      this.m_pizza$.next(pizza);
    });
  }

  deletePizza(pizza: Pizza) {
    return this.http.delete(BASE_URL + "/" + pizza.id);
  }

  createPizza(pizza: Pizza) {
    return this.http.post(BASE_URL, pizza);
  }

  updatePizza(pizza: Pizza){
    return this.http.put(BASE_URL + "/" + pizza.id, pizza);
  }
}
