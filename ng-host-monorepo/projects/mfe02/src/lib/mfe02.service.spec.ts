import { TestBed } from '@angular/core/testing';

import { Mfe02Service } from './mfe02.service';

describe('Mfe02Service', () => {
  let service: Mfe02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mfe02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
