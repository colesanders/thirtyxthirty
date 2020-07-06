import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsInfoComponent } from './lessons-info.component';

describe('LessonsInfoComponent', () => {
  let component: LessonsInfoComponent;
  let fixture: ComponentFixture<LessonsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
