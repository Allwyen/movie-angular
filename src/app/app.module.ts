import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path:'addmovie',component:AddmovieComponent},
  {path:'viewmovie',component:ViewmovieComponent},
  {path:'searchmovie',component:SearchmovieComponent}
];

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddmovieComponent,
    ViewmovieComponent,
    SearchmovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,AppComponent]
})
export class AppModule { }
