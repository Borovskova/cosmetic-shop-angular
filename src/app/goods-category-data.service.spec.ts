import { TestBed } from '@angular/core/testing';

import { GoodsCategoryDataService } from './goods-category-data.service';

describe('GoodsCategoryDataService', () => {
  let service: GoodsCategoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsCategoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
