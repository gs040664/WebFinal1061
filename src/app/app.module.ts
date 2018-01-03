import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './public/app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFilterPipe } from './public/book-filter/book-filter.pipe';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ShoppingCarModalComponent } from './public/shopping-car-modal/shopping-car-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    BookListComponent,
    BookFilterPipe,
    SignupComponent,
    LoginComponent,
    ShoppingCarModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'BookShelf'),
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  entryComponents: [ShoppingCarModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
