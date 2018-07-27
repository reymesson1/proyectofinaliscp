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
  public email: string;
  public password: string;
  public type: string;
  public status: string;
  public errorMessage: string;

  constructor(private router :Router,private data: RestDataSource){

    this.status = "Active";    

  }

  authenticate(form: NgForm){    


    this.data.setRegistration(new User("0",this.username,this.password,this.firstname,this.lastname,this.type,this.status,this.email));
  }

}