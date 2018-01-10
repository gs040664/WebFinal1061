import { TestBed, inject } from '@angular/core/testing';

import { RecommendListService } from './recommend-list.service';

describe('RecommendListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendListService]
    });
  });

  it('should be created', inject([RecommendListService], (service: RecommendListService) => {
    expect(service).toBeTruthy();
  }));
});
