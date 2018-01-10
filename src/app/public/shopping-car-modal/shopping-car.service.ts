import { Injectable } from '@angular/core';
import { Book } from '../book.class';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCarService {
  currentUser;
  private listRef: AngularFirestoreCollection<Book>;
  list: Observable<Book[]>;
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.currentUser = auth;
      if (auth) {
        this.listRef = this.afs.collection(
          'shoppingLists/' + this.currentUser.email + '/shoppingList'
        );
        this.list = this.listRef.snapshotChanges().map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Book;
            const shoppingListId = a.payload.doc.id;
            return { shoppingListId, ...data };
          });
        });
      }
    });
  }

  getList() {
    return this.list.map(list => {
      return list;
    });
  }

  getTotalPrice() {
    return this.list.map(list => {
      return list
        .map(book => book.price * book.quantity)
        .reduce((total, price) => total + price, 0);
    });
  }

  add(book) {
    console.log(this.currentUser == null);
    if (this.currentUser) {
      console.log(this.list);
      book.quantity = 1;
      this.listRef.add(book);
      alert('已加入購物車！');
    } else {
      alert('請先登入！');
      this.router.navigate(['auth/login']);
    }
  }

  delete(book) {
    console.log(book);
    this.listRef.doc(book.shoppingListId).delete();
  }

  update(book) {
    this.listRef.doc(book.shoppingListId).update(book);
  }

  private handleError(error) {
    console.log(error);
  }
}
