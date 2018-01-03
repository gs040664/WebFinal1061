import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCarModalComponent } from '../shopping-car-modal/shopping-car-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  searchTypes = [
    { type: 'name', text: '書名' },
    { type: 'author', text: '作者' }
  ];
  currentSearchType;
  searchInput: string;
  searchQuery: object = {};
  currentUser;

  shoppingCarModalRef;
  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      this.currentUser = auth;
      console.log(auth);
    });
    this.currentSearchType = this.searchTypes[0];
  }

  changeSearchType(i) {
    this.currentSearchType = this.searchTypes[i];
  }

  search() {
    this.searchQuery[this.currentSearchType.type] = this.searchInput;
    this.router.navigate(['list'], { queryParams: this.searchQuery });
    this.searchQuery = {};
    this.searchInput = '';
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  launchModal() {
    this.shoppingCarModalRef = this.modalService.open(
      ShoppingCarModalComponent
    );
    this.shoppingCarModalRef.result.then(a => {
      console.log(a);
    });
  }
}
