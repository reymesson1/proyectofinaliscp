import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { User } from "../model/user.model";

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

    this.data.getUsers().subscribe(data=>{
      console.log(data);
    });

    Object.assign(this.user,{
      "id" : "0",
      "username" : "joseperez",
      "password" : "1234",
      "firstname" : "Jose",
      "lastname" : "Perez"
    })

  }

  authenticate(form: NgForm){    
    this.data.username=this.username;
    this.data.password=this.password;
    this.router.navigateByUrl("/home");
  }

}