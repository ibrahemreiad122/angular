import { TestBed } from '@angular/core/testing';

import { TestObService } from './test-ob.service';

describe('TestObService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestObService = TestBed.get(TestObService);
    expect(service).toBeTruthy();
  });
});
