import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCarService } from './shopping-car.service';

@Component({
  selector: 'app-shopping-car-modal',
  templateUrl: './shopping-car-modal.component.html',
  styleUrls: ['./shopping-car-modal.component.css'],
  providers: [ShoppingCarService]
})
export class ShoppingCarModalComponent implements OnInit {
  bookList;

  constructor(
    public activeModal: NgbActiveModal,
    public shoppingCarService: ShoppingCarService
  ) {}

  ngOnInit() {
    this.bookList = this.shoppingCarService.getList();
  }

  checkout() {
    console.log('FK');
  }

  initList() {
    this.shoppingCarService.init();
  }
}
