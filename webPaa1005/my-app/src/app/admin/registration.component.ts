import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { User } from "../model/user.model";

@Component({
    selector: 'registration',
    templateUrl: "registration.component.html"
})

export class RegistrationComponent{

  public username: string;
  public firstname: string;
  public lastname: string;
  public password: string;
  public errorMessage: string;

  constructor(private router :Router,private data: RestDataSource){}

  authenticate(form: NgForm){    

    this.data.setRegistration(new User("0",this.username,this.password,this.firstname,this.lastname));
  }

}