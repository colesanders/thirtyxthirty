import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseInfoComponent } from './cheese-info.component';

describe('CheeseInfoComponent', () => {
  let component: CheeseInfoComponent;
  let fixture: ComponentFixture<CheeseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
