import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PizzaService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { PizzaComponent } from './pizza.component';
import { Pizza } from '@thirty/api-interfaces';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

const mockEmptyPizza: Pizza = {
  id: null,
  name: 'Mock Empty Pizza',
  description: '',
  type: '',
  price: 0,
  stars: 1,
};

const mockPizza = {
  id: 1,
  name: 'Mock Pizza',
  description: 'Mock descr',
  type: 'sit-com',
  price: 0,
  stars: 1,
};

const mockPizzaService = {
  getPizzas: () => of([]),
  createPizza: () => of({}),
  updatePizza: () => of({}),
  deletePizza: () => of({})
}

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;
  let de: DebugElement;
  let pizzaService: PizzaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: PizzaService, useValue: mockPizzaService }
      ],
      declarations: [
        PizzaComponent,
        PizzaDetailComponent,
        PizzaListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    pizzaService = de.injector.get(PizzaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a pizza', () => {
    component.selectPizza(mockPizza);
    expect(component.pizzaForm.value).toMatchSnapshot();
  });
});
