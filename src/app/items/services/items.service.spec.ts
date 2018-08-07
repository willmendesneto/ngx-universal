import { TestBed, inject } from '@angular/core/testing';

import { ListingItemService } from './items.service';

describe('ListingItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingItemService]
    });
  });

  it('should be created', inject([ListingItemService], (service: ListingItemService) => {
    expect(service).toBeTruthy();
  }));
});
