import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFountainComponent } from './water-fountain.component';

describe('WaterFountainComponent', () => {
  let component: WaterFountainComponent;
  let fixture: ComponentFixture<WaterFountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterFountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
