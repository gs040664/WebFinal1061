import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCarService } from './shopping-car.service';

describe('ShoppingCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCarService]
    });
  });

  it('should be created', inject([ShoppingCarService], (service: ShoppingCarService) => {
    expect(service).toBeTruthy();
  }));
});
