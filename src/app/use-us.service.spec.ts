import { TestBed } from '@angular/core/testing';

import { UseUsService } from './use-us.service';

describe('UseUsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseUsService = TestBed.get(UseUsService);
    expect(service).toBeTruthy();
  });
});
