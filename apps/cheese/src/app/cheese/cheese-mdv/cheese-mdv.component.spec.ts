import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseMdvComponent } from './cheese-mdv.component';

describe('CheeseMdvComponent', () => {
  let component: CheeseMdvComponent;
  let fixture: ComponentFixture<CheeseMdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseMdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseMdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
