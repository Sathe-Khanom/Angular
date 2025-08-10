import { TestBed } from '@angular/core/testing';

import { RefferenceService } from './refference.service';

describe('RefferenceService', () => {
  let service: RefferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
