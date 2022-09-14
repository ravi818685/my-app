import { TestBed } from '@angular/core/testing';

import { ProductofitemsService } from './productofitems.service';

describe('ProductofitemsService', () => {
  let service: ProductofitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductofitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
