import { TestBed } from '@angular/core/testing';

import { UserIn4Service } from './user-in4.service';

describe('UserIn4Service', () => {
  let service: UserIn4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIn4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
