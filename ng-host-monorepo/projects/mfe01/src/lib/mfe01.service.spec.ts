import { TestBed } from '@angular/core/testing';

import { Mfe01Service } from './mfe01.service';

describe('Mfe01Service', () => {
  let service: Mfe01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mfe01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
