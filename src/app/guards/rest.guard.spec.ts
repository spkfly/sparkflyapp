import { TestBed } from '@angular/core/testing';

import { RestGuard } from './rest.guard';

describe('RestGuard', () => {
  let guard: RestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
