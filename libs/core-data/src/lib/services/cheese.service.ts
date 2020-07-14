import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cheese } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/cheeses';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  constructor(private http: HttpClient) {}

  getCheeses(): Observable<[Cheese]> {
    return this.http.get<[Cheese]>(BASE_URL);
  }

  getCheeseById(id): Observable<Cheese> {
    return this.http.get<Cheese>(BASE_URL + "/" + id);
  }

  deleteCheese(cheese: Cheese) {
    return this.http.delete(BASE_URL + "/" + cheese.id);
  }

  createCheese(cheese: Cheese) {
    return this.http.post(BASE_URL, cheese);
  }

  updateCheese(cheese: Cheese){
    return this.http.put(BASE_URL + "/" + cheese.id, cheese);
  }
}
