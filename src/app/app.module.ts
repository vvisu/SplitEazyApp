import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AppRouteModule } from './/app-route.module';
import { ClientService } from './services/client.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireAuthModule  } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    AngularFireModule.initializeApp(environment.firebase,'SplitEazyApp'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
