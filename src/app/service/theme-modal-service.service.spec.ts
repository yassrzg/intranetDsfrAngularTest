import { TestBed } from '@angular/core/testing';

import { ThemeModalServiceService } from './theme-modal-service.service';

describe('ThemeModalServiceService', () => {
  let service: ThemeModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
