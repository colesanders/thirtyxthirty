import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFountainListComponent } from './water-fountain-list.component';

describe('WaterFountainListComponent', () => {
  let component: WaterFountainListComponent;
  let fixture: ComponentFixture<WaterFountainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterFountainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFountainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
