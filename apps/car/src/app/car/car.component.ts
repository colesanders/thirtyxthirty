import { Component, OnInit } from '@angular/core';
import { Car } from '@thirty/api-interfaces';
import { CarService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'thirty-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  title = 'Cars';
  selectedCar: Car;
  carForm: FormGroup
  car$: Observable<Car[]>;

  constructor(private carsService: CarService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteCar(car:Car) {
    this.carsService.deleteCar(car)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveCar() {
    const car = this.carForm.value;

    this.snackBarService.openSnackBar("Car Saved!", "Okay", 2000)

    if(car.id !== null){
      this.carsService.updateCar(car)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.carsService.createCar(car)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadCars();
    this.resetForm();
  }

  resetForm(){
    this.carForm = this.formBuilder.group({
      id: [],
      type : [''],
      description : [''],
      price: ['0'],
      color: [''],
    })
  }

  selectCar(car: Car) {
    this.carForm = this.formBuilder.group({
      id: [car.id],
      type: [car.type],
      description: [car.description],
      price: [car.price],
      color: [car.color],
    })
  }

  loadCars(): void{
    this.car$ = this.carsService.getCars();
  }

}
