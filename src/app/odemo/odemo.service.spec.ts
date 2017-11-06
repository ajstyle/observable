import { TestBed, inject } from '@angular/core/testing';

import { OdemoService } from './odemo.service';

describe('OdemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdemoService]
    });
  });

  it('should ...', inject([OdemoService], (service: OdemoService) => {
    expect(service).toBeTruthy();
  }));
});
