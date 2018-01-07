import { Injectable } from '@angular/core';
import { Book } from '../book.class';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCarService {
  currentUser;
  private listRef: AngularFirestoreCollection<Book>;
  list: Observable<Book[]>;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.authState.subscribe(auth => {
      this.currentUser = auth;
      console.log(auth);
      this.listRef = this.afs.collection(
        'shoppingLists/' + this.currentUser.email + '/shoppingList'
      );
      this.list = this.listRef.valueChanges();
    });
  }

  getList() {
    return this.list;
  }

  init() {}

  add(book) {
    console.log(this.list);
    this.listRef.add(book);
  }

  delete() {}

  private handleError(error) {
    console.log(error);
  }
}
