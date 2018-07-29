import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { ActivatedRoute,Params }  from '@angular/router';


@Component({
    selector: 'validation',
    templateUrl: "validation.component.html"
})

export class ValidationComponent{

  private id: string;
  public username: string;  
  public password: string;  
  
  constructor(private route: ActivatedRoute,private data: RestDataSource){

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
      }
    );

    this.username = this.id;

  }

  authenticate(){

    this.data.validate(this.username,this.password);
  }


}