import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarModalComponent } from './shopping-car-modal.component';

describe('ShoppingCarModalComponent', () => {
  let component: ShoppingCarModalComponent;
  let fixture: ComponentFixture<ShoppingCarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
