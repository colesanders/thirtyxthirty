import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitInfoComponent } from './fruit-info.component';

describe('FruitInfoComponent', () => {
  let component: FruitInfoComponent;
  let fixture: ComponentFixture<FruitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
