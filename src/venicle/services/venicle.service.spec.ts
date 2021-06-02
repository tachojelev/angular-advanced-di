import { TestBed } from '@angular/core/testing';

import { VenicleService } from './venicle.service';

describe('VenicleService', () => {
  let service: VenicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
