import { TestBed } from '@angular/core/testing';

import { NetflixDataService } from './netflix-data.service';

describe('NetflixDataService', () => {
  let service: NetflixDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetflixDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
