import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  getFruits(): Observable<[Fruit]> {
    return this.http.get<[Fruit]>(BASE_URL);
  }

  deleteFruit(fruit: Fruit) {
    return this.http.delete(BASE_URL + "/" + fruit.id);
  }

  createFruit(fruit: Fruit) {
    return this.http.post(BASE_URL, fruit);
  }

  updateFruit(fruit: Fruit){
    return this.http.put(BASE_URL + "/" + fruit.id, fruit);
  }
}
