import { TestBed } from '@angular/core/testing';

import { MockPatientService } from './mock-patient.service';

describe('MockPatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockPatientService = TestBed.get(MockPatientService);
    expect(service).toBeTruthy();
  });
});
