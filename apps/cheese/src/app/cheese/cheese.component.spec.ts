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
import { CheeseInfoComponent } from './cheese-mdv/cheese-info/cheese-info.component';
import { CheeseListComponent } from './cheese-mdv/cheese-list/cheese-list.component';

const mockEmptyCheese: Cheese = {
  id: null,
  name: 'Mock Empty Cheese',
  description: '',
  tags: '',
  rating: '',
  price: 0,
};

const mockCheese : Cheese = {
  id: 1,
  name: 'Mock Cheese',
  description: 'Mock',
  tags: '',
  rating: '',
  price: 0,
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

  it('should set route as detail 1', () => {
    component.updateLinks(1);
    expect(component.links[1].path).toMatchSnapshot();
  });
});
