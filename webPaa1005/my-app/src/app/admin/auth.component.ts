import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    selector: 'auth',
    templateUrl: "auth.component.html"
})

export class AuthComponent{

  public username: string;
  public password: string;
  public errorMessage: string;

  
  constructor(private router :Router,private data: RestDataSource){
  }

  authenticate(form: NgForm){    
    this.data.username=this.username;
    this.data.password=this.password;
    this.router.navigateByUrl("/home");
    
    
  }

}