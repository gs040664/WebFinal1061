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
import { RecommendListService } from '../public/recommend-list/recommend-list.service';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css'],
  providers: [ShoppingCarService, RecommendListService]
})
export class BookSingleComponent implements OnInit {
  bookId;
  bookCol: AngularFirestoreDocument<Book>;
  book: Observable<Book>;
  booksCol: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  recommendList: Observable<Book[]>;
  bookFilterArgs;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public shoppingCarService: ShoppingCarService
  ) {
    this.bookId = this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      console.log(params, this.bookId);
      this.bookId = params.id;
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.bookCol = this.afs.collection('books').doc(this.bookId);
    this.book = this.bookCol.valueChanges().map(book => {
      this.bookFilterArgs = {
        series: book.series,
        category: book.category
      };
      return book;
    });
    this.booksCol = this.afs.collection('books');
    this.books = this.booksCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        data.authors = data.author.split('　');
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
