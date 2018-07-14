import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';
import { Offer } from '../model/offer.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})

@Injectable()
export class ViewServiceComponent {

  public id : string;
  public complexTitle: any;
  public date: string;
  public title: string;
  public description : string;
  public category : string;
  public notes : string;
  public price : string;

  public services: any[] = [];
    
  constructor(private route: ActivatedRoute, private data: RestDataSource){

    this.data.getServices().subscribe(data=>{
      this.services = data;      
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
      }
    );

    this.complexTitle = this.services.filter(
      (master) => master.id == this.id
    );

    this.title = this.complexTitle[0].title;
    this.date = this.complexTitle[0].date;
    this.description = this.complexTitle[0].description;
    this.category = this.complexTitle[0].category;
    this.notes = this.complexTitle[0].notes;    
    this.price = this.complexTitle[0].price;

  }

  ngOnInit(){

  }

  newOffer : Object = new Object();

  addOffer(o){

        
    this.data.addOffer(o,this.id);  
    
    this.newOffer = new Object();
    
  }  
}