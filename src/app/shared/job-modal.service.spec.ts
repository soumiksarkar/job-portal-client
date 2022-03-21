import { TestBed } from '@angular/core/testing';

import { JobModalService } from './job-modal.service';

describe('JobModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobModalService = TestBed.get(JobModalService);
    expect(service).toBeTruthy();
  });
});
