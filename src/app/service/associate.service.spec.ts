import { TestBed } from '@angular/core/testing';

import { AssociateService } from './associate.service';

describe('AssociateService', () => {
  let service: AssociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
