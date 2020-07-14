import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CheeseService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { CheeseComponent } from './cheese.component';
import { Cheese } from '@thirty/api-interfaces';
import { CheeseInfoComponent } from './cheese-info/cheese-info.component';
import { CheeseListComponent } from './cheese-list/cheese-list.component';

const mockEmptyCheese: Cheese = {
  id: null,
  name: 'Mock Empty Cheese',
  description: '',
  pressure: 0,
  temperature: 0,
  stars: 1,
};

const mockCheese : Cheese = {
  id: 1,
  name: 'Mock Cheese',
  description: 'Mock',
  pressure: 1,
  temperature: 1,
  stars: 1,
};

const mockCheeseService = {
  getCheeses: () => of([]),
  createCheese: () => of({}),
  updateCheese: () => of({}),
  deleteCheese: () => of({})
}

describe('CheeseComponent', () => {
  let component: CheeseComponent;
  let fixture: ComponentFixture<CheeseComponent>;
  let de: DebugElement;
  let cheeseService: CheeseService;

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
        { provide: CheeseService, useValue: mockCheeseService }
      ],
      declarations: [
        CheeseComponent,
        CheeseInfoComponent,
        CheeseListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    cheeseService = de.injector.get(CheeseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a cheese', () => {
    component.selectCheese(mockCheese);
    expect(component.cheeseForm.value).toMatchSnapshot();
  });
});
