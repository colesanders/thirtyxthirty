import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '@thirty/api-interfaces';
import { Observable, BehaviorSubject} from 'rxjs';
import * as Rx from "rxjs";

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/computers';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private blankComputer:Computer = {
    id: null,
    cpu: "",
    gpu: "",
    ram: 2,
    extras: [''],
    price: 0
  }

  private m_computer$ = new Rx.BehaviorSubject<Computer>(this.blankComputer);

  get computer$(): Observable<Computer> {
    return this.m_computer$.asObservable();
  }

  set extras(inputExtras){
    this.m_computer$.value.extras = inputExtras;
  }

  get extras(){
    return this.m_computer$.value.extras;
  }

  constructor(private http: HttpClient) { }

  getComputers(): Observable<[Computer]> {
    return this.http.get<[Computer]>(BASE_URL);
  }

  getComputerById(id: number): Observable<Computer> {
    return this.http.get<Computer>(BASE_URL + "/" + id);
  }

  setComputerBlank(){
    this.m_computer$.next(this.blankComputer);
  }

  setComputerById(id: number) {
    this.getComputerById(id).subscribe(computer => {
      this.m_computer$.next(computer);
    });
  }

  deleteComputer(computer: Computer) {
    return this.http.delete(BASE_URL + "/" + computer.id);
  }

  createComputer(computer: Computer) {
    return this.http.post(BASE_URL, computer);
  }

  updateComputer(computer: Computer){
    return this.http.put(BASE_URL + "/" + computer.id, computer);
  }
}
