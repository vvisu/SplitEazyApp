import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { Routes, RouterModule } from '@angular/router';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent}
];


@NgModule({

  exports : [RouterModule],
  imports: [
   RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule { }
