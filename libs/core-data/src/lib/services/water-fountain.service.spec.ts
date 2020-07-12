import { TestBed } from '@angular/core/testing';

import { WaterFountainService } from './water-fountain.service';

describe('WaterFountainService', () => {
  let service: WaterFountainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterFountainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
