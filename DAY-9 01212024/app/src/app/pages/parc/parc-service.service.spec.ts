import { TestBed } from '@angular/core/testing';

import { ParcServiceService } from './parc-service.service';

describe('ParcServiceService', () => {
  let service: ParcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
