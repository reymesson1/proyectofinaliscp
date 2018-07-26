import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { User } from "../model/user.model";
import { userInfo } from "os";

@Component({
    selector: 'account',
    templateUrl: "account.component.html"
})

export class AccountComponent{

  public username: string;
  public password: string;  
  public errorMessage: string;
  user : User = new User();


  constructor(private router :Router,private data: RestDataSource){

    let userObj = this.data.getUsers();
    
    if(userObj){
            
      Object.assign(this.user,{
        "id" : "0",
        "username" : this.data.isValidatedUser[0].username,
        "password" : this.data.isValidatedUser[0].password,
        "firstname" : this.data.isValidatedUser[0].firstname,
        "lastname" : this.data.isValidatedUser[0].lastname
      })
    }

  }

  authenticate(form: NgForm){    

    this.data.setUpdateRegistration(this.user.username,this.user.password);

    this.router.navigateByUrl("/home");
  }

}