import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { AccountComponent } from "./admin/account.component";
import { ForgotComponent } from "./admin/forgot.component";
import { ValidationComponent } from "./admin/validation.component";
import { MomentModule } from 'angular2-moment';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    HomeComponent,AppComponent,ListServiceComponent,NavbarComponent, AddServiceComponent, EditServiceComponent, DeleteServiceComponent, OfferComponent, ViewServiceComponent, MakeOfferComponent, SuggestionComponent, MakeSuggestionComponent, AuthComponent, RegistrationComponent, AccountComponent, ForgotComponent, ValidationComponent
  ],
  imports: [
    HttpModule, MomentModule,FormsModule, ReactiveFormsModule,BrowserModule, RoutesModule],
  providers: [RestDataSource,AuthGuard],
  bootstrap: [AppComponent,HomeComponent,ListServiceComponent,NavbarComponent, AddServiceComponent,OfferComponent, ViewServiceComponent, MakeOfferComponent, SuggestionComponent, MakeSuggestionComponent, AuthComponent, RegistrationComponent, AccountComponent, ForgotComponent, ValidationComponent]
})
export class AppModule { }
