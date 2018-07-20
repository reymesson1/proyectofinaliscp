import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ViewServiceComponent } from './list-service/view-service.component';
import { EditServiceComponent } from './list-service/edit-service.component';
import { DeleteServiceComponent } from './list-service/delete-service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { Routes, RouterModule } from '@angular/router';

import { RestDataSource } from "./model/rest.datasource";

import { OfferComponent } from './offers/list-offers.component';
import { MakeOfferComponent } from './offers/make-offers.component';
import { SuggestionComponent } from './suggestions/list-suggestions.component';
import { MakeSuggestionComponent } from './suggestions/make-suggestions.component';

import { AuthGuard } from "./admin/auth.guard";
import { AuthComponent } from "./admin/auth.component";
import { RegistrationComponent } from "./admin/registration.component";

@NgModule({
  declarations: [
    HomeComponent,AppComponent,ListServiceComponent,NavbarComponent, AddServiceComponent, EditServiceComponent, DeleteServiceComponent, OfferComponent, ViewServiceComponent, MakeOfferComponent, SuggestionComponent, MakeSuggestionComponent, AuthComponent, RegistrationComponent
  ],
  imports: [
    HttpModule, JsonpModule,FormsModule, ReactiveFormsModule,BrowserModule, RouterModule.forRoot([
      { path: "registration", component: RegistrationComponent },
      { path: "admin", component: AuthComponent },
      { path: "add", component: AddServiceComponent, canActivate: [AuthGuard] },
      { path: "home", component: HomeComponent },
      { path: "list", component: ListServiceComponent },
      { path: "view", component: ViewServiceComponent },
      { path: "view/:id", component: ViewServiceComponent },
      { path: "edit", component: EditServiceComponent },
      { path: "edit/:id", component: EditServiceComponent },
      { path: "delete", component: DeleteServiceComponent },
      { path: "offer", component: OfferComponent },
      { path: "makeoffer", component: MakeOfferComponent },
      { path: "makeoffer/:id", component: MakeOfferComponent },
      { path: "suggestion", component: SuggestionComponent },
      { path: "makesuggestion", component: MakeSuggestionComponent },
      { path: "makesuggestion/:id", component: MakeSuggestionComponent },
      { path: "**", redirectTo: "/home" }
    ])],
  providers: [RestDataSource, AuthGuard],
  bootstrap: [AppComponent,HomeComponent,ListServiceComponent,NavbarComponent, AddServiceComponent,OfferComponent, ViewServiceComponent, MakeOfferComponent, SuggestionComponent, MakeSuggestionComponent, AuthComponent, RegistrationComponent]
})
export class AppModule { }
