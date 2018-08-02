import { Component,Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListServiceComponent } from '../list-service/list-service.component';

import { Service } from '../model/service.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {  

  title = 'Add Service';

  constructor(private router: Router, private data: RestDataSource){
    console.log(this.data.username);
  }

  newService: Service = new Service();
  
  addService(s: Service){

    this.data.addService(s);

    this.router.navigateByUrl('/home');
  }

}