import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    selector: 'forgot',
    templateUrl: "forgot.component.html"
})

export class ForgotComponent{

  public email: string;  
  public errorMessage: boolean = false;

  constructor(private router :Router,private data: RestDataSource){}

  authenticate(form: NgForm){    
    
    this.errorMessage = true;
    this.data.forgotPassword(this.email);
    this.email = "";
  }

}