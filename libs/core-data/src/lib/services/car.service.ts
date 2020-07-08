import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<[Car]> {
    return this.http.get<[Car]>(BASE_URL);
  }

  deleteCar(car: Car) {
    return this.http.delete(BASE_URL + "/" + car.id);
  }

  createCar(car: Car) {
    return this.http.post(BASE_URL, car);
  }

  updateCar(car: Car){
    return this.http.put(BASE_URL + "/" + car.id, car);
  }
}
