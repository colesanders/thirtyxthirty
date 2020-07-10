import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CarService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { CarComponent } from './car.component';

const mockEmptyCar = {
  id: null,
  type: 'Mock Empty Car',
  description: '',
  price: null,
  color: "",
};

const mockCar = {
  id: 1,
  type: 'Mock Car',
  description: '',
  price: 1,
  color: "red"
};

const mockCarService = {
  getCars: () => of([]),
  createCar: () => of({}),
  updateCar: () => of({}),
  deleteCar: () => of({})
}

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;
  let de: DebugElement;
  let carService: CarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: CarService, useValue: mockCarService }
      ],
      declarations: [
        CarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    carService = de.injector.get(CarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a course', () => {
    component.selectCar(mockCar);
    expect(component.selectedCar).toBe(mockCar);
  });

  it('should get courses', () => {
    spyOn(carService, 'getCars').and.callThrough();
    component.loadCars();
    expect(carService.getCars).toHaveBeenCalled();
  });

  it('should call carService.createCar', () => {
    spyOn(carService, 'createCar').and.callThrough();
    component.selectCar(mockEmptyCar)
    component.saveCar();
    expect(carService.createCar).toHaveBeenCalledWith(mockEmptyCar);
  });

  it('should call carService.update', () => {
    spyOn(carService, 'updateCar').and.callThrough();
    component.selectCar(mockCar)
    component.saveCar();
    expect(carService.updateCar).toHaveBeenCalledWith(mockCar);
  });

  it('should call carService.delete', () => {
    spyOn(carService, 'deleteCar').and.callThrough();
    component.deleteCar(mockCar);
    expect(carService.deleteCar).toHaveBeenCalledWith(mockCar);
  });
});