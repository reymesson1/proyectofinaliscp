import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { EditServiceComponent } from './list-service/edit-service.component';
import { DeleteServiceComponent } from './list-service/delete-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { Routes, RouterModule } from '@angular/router';

import { RestDataSource } from "./model/rest.datasource";

import { OfferComponent } from './offers/list-offers.component';

@NgModule({
  declarations: [
    HomeComponent,AppComponent,ListServiceComponent,NavbarComponent, AddServiceComponent, EditServiceComponent, DeleteServiceComponent, OfferComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,BrowserModule, RouterModule.forRoot([
      { path: "add", component: AddServiceComponent },
      { path: "home", component: HomeComponent },
      { path: "list", component: ListServiceComponent },
      { path: "edit", component: EditServiceComponent },
      { path: "edit/:id", component: EditServiceComponent },
      { path: "delete", component: DeleteServiceComponent },
      { path: "offer", component: OfferComponent },
      { path: "**", redirectTo: "/home" }
    ])],
  providers: [RestDataSource],
  bootstrap: [AppComponent,HomeComponent,ListServiceComponent,NavbarComponent, AddServiceComponent,OfferComponent]
})
export class AppModule { }
