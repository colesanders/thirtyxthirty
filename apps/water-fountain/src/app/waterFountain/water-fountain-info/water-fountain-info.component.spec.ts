import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFountainInfoComponent } from './water-fountain-info.component';

describe('WaterFountainInfoComponent', () => {
  let component: WaterFountainInfoComponent;
  let fixture: ComponentFixture<WaterFountainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterFountainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFountainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
