import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WaterFountain } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/waterFountains';

@Injectable({
  providedIn: 'root'
})
export class WaterFountainService {

  constructor(private http: HttpClient) { }

  getWaterFountains(): Observable<[WaterFountain]> {
    return this.http.get<[WaterFountain]>(BASE_URL);
  }

  deleteWaterFountain(waterFountain: WaterFountain) {
    return this.http.delete(BASE_URL + "/" + waterFountain.id);
  }

  createWaterFountain(waterFountain: WaterFountain) {
    return this.http.post(BASE_URL, waterFountain);
  }

  updateWaterFountain(waterFountain: WaterFountain){
    return this.http.put(BASE_URL + "/" + waterFountain.id, waterFountain);
  }
}
