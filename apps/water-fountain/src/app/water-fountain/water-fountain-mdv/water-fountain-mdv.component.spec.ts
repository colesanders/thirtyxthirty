import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFountainMdvComponent } from './water-fountain-mdv.component';

describe('WaterFountainMdvComponent', () => {
  let component: WaterFountainMdvComponent;
  let fixture: ComponentFixture<WaterFountainMdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterFountainMdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFountainMdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
