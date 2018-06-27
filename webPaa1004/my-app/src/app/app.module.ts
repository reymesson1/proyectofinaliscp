import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { Routes, RouterModule } from '@angular/router';

import { RestDataSource } from './model/rest.datasource';

@NgModule({
  declarations: [
    AppComponent,ListServiceComponent,NavbarComponent, AddServiceComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,BrowserModule, RouterModule.forRoot([
      { path: "add", component: AddServiceComponent },
      { path: "home", component: ListServiceComponent },
      { path: "**", redirectTo: "/home" }
    ])],
  providers: [RestDataSource],
  bootstrap: [AppComponent,ListServiceComponent,NavbarComponent, AddServiceComponent]
})
export class AppModule { }
