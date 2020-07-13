import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { WaterFountainService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { WaterFountainComponent } from './water-fountain.component';
import { WaterFountain } from '@thirty/api-interfaces';
import { WaterFountainInfoComponent } from './water-fountain-info/water-fountain-info.component';
import { WaterFountainListComponent } from './water-fountain-list/water-fountain-list.component';

const mockEmptyWaterFountain: WaterFountain = {
  id: null,
  name: 'Mock Empty WaterFountain',
  description: '',
  pressure: 0,
  temperature: 0,
  stars: 1,
};

const mockWaterFountain : WaterFountain = {
  id: 1,
  name: 'Mock WaterFountain',
  description: 'Mock',
  pressure: 1,
  temperature: 1,
  stars: 1,
};

const mockWaterFountainService = {
  getWaterFountains: () => of([]),
  createWaterFountain: () => of({}),
  updateWaterFountain: () => of({}),
  deleteWaterFountain: () => of({})
}

describe('WaterFountainComponent', () => {
  let component: WaterFountainComponent;
  let fixture: ComponentFixture<WaterFountainComponent>;
  let de: DebugElement;
  let waterFountainService: WaterFountainService;

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
        { provide: WaterFountainService, useValue: mockWaterFountainService }
      ],
      declarations: [
        WaterFountainComponent,
        WaterFountainInfoComponent,
        WaterFountainListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFountainComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    waterFountainService = de.injector.get(WaterFountainService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a waterFountain', () => {
    component.selectWaterFountain(mockWaterFountain);
    expect(component.waterFountainForm.value).toMatchSnapshot();
  });
});
