import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Book } from '../public/book.class';
import { ShoppingCarService } from '../public/shopping-car-modal/shopping-car.service';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css'],
  providers: [ShoppingCarService]
})
export class BookSingleComponent implements OnInit {
  bookId;
  bookCol: AngularFirestoreDocument<Book>;
  book: Observable<Book>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public shoppingCarService: ShoppingCarService
  ) {
    this.bookId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.bookCol = this.afs.collection('books').doc(this.bookId);
    this.book = this.bookCol.valueChanges();
  }
}
