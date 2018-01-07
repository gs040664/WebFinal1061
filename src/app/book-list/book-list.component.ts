import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../public/book.class';
import { ShoppingCarService } from '../public/shopping-car-modal/shopping-car.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [ShoppingCarService]
})
export class BookListComponent implements OnInit {
  booksCol: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookFilterArgs;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public shoppingCarService: ShoppingCarService
  ) {}

  ngOnInit() {
    this.booksCol = this.afs.collection('books');
    this.books = this.booksCol.valueChanges();
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.bookFilterArgs = params;
    });
  }

  addBook(book) {
    this.shoppingCarService.add(book);
  }
}
