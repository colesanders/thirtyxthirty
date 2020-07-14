import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDetailComponent } from './single-detail.component';

describe('SingleDetailComponent', () => {
  let component: SingleDetailComponent;
  let fixture: ComponentFixture<SingleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
