import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCarService } from './shopping-car.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-car-modal',
  templateUrl: './shopping-car-modal.component.html',
  styleUrls: ['./shopping-car-modal.component.css'],
  providers: [ShoppingCarService]
})
export class ShoppingCarModalComponent implements OnInit {
  bookList;
  totalPrice: Observable<number>;

  constructor(
    public activeModal: NgbActiveModal,
    public shoppingCarService: ShoppingCarService
  ) {}

  ngOnInit() {
    this.bookList = this.shoppingCarService.getList();
    this.totalPrice = this.shoppingCarService.getTotalPrice();
  }

  checkout() {
    console.log('FK');
  }

  delete(book) {
    console.log(book);
    this.shoppingCarService.delete(book);
  }

  updateQuantity(event, book) {
    console.log(event);
    this.shoppingCarService.update(book);
  }
}
