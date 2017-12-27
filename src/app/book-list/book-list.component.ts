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

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksCol: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookFilterArgs;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {}

  ngOnInit() {
    this.booksCol = this.afs.collection('books');
    this.books = this.booksCol.valueChanges();
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.bookFilterArgs = params;
    });
  }
}
