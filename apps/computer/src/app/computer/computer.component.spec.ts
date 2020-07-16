import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ComputerService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { ComputerComponent } from './computer.component';
import { Computer } from '@thirty/api-interfaces';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { ComputerListComponent } from './computer-list/computer-list.component';

const mockEmptyComputer: Computer = {
  id: null,
  name: 'Mock Empty Computer',
  description: '',
  type: '',
  price: 0,
  stars: 1,
};

const mockComputer = {
  id: 1,
  name: 'Mock Computer',
  description: 'Mock descr',
  type: 'sit-com',
  price: 0,
  stars: 1,
};

const mockComputerService = {
  getComputers: () => of([]),
  createComputer: () => of({}),
  updateComputer: () => of({}),
  deleteComputer: () => of({})
}

describe('ComputerComponent', () => {
  let component: ComputerComponent;
  let fixture: ComponentFixture<ComputerComponent>;
  let de: DebugElement;
  let computerService: ComputerService;

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
        { provide: ComputerService, useValue: mockComputerService }
      ],
      declarations: [
        ComputerComponent,
        ComputerDetailComponent,
        ComputerListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    computerService = de.injector.get(ComputerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a computer', () => {
    component.selectComputer(mockComputer);
    expect(component.computerForm.value).toMatchSnapshot();
  });
});
