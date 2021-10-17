import { TestBed } from '@angular/core/testing';

import { FilteredGoodsService } from './filtered-goods.service';

describe('FilteredGoodsService', () => {
  let service: FilteredGoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredGoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
