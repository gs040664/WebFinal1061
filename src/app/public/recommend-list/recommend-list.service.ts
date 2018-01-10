import { Injectable } from '@angular/core';
import { Book } from '../book.class';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RecommendListService {
  list: Observable<Book[]>;
  constructor(private afs: AngularFirestore) {}

  getRecommendList(book) {
    const listRef: AngularFirestoreCollection<Book> = this.afs.collection(
      'book',
      ref => ref.where('series', '==', book.series).where('limit', '==', 5)
    );
    this.list = listRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const shoppingListId = a.payload.doc.id;
        return { shoppingListId, ...data };
      });
    });

    return this.list.map(list => {
      console.log(list);
      return list;
    });
  }
}
