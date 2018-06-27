import { Component,Injectable } from '@angular/core';
import { Service } from '../model/service.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListServiceComponent } from '../list-service/list-service.component';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  title = 'Add Service';

  newdata: Object;

  constructor(private router: Router, private data: RestDataSource){
  }
  
  newService: Service = new Service();


  get jsonService(){
    return JSON.parse(JSON.stringify(this.newService));
  }

  addService(s: Service){

    console.log(this.data.services);
    console.log(this.jsonService);    
    this.data.services.push(this.jsonService);
    console.log(this.data.services);
    this.router.navigateByUrl('/home');

  }

}