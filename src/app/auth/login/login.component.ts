import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = {
    email: '',
    password: ''
  };
  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.loginUser.email, this.loginUser.password)
      .then(() => {
        this.router.navigate(['list']);
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
