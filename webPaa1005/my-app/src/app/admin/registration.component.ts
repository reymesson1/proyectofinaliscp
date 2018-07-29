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
  public users: any[] = [];


  constructor(private router :Router,private data: RestDataSource){

    this.status = "pending"; 
    
    this.data.getAllUsers().subscribe(data=>{            
      this.users = data;      
    });

  }

  authenticate(form: NgForm){    

    let quantity = this.users.length;

    this.data.setRegistration(new User(quantity.toString(),this.username,this.password,this.firstname,this.lastname,this.type,this.status,this.email));
  }

}