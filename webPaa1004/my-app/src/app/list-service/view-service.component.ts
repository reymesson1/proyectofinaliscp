import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';
import { Offer } from '../model/offer.model';
import { Suggestion } from '../model/suggestion.model';

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
  public count = 0;

  newOffer : Object = new Object();
    
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

    Object.assign(this.newOffer,{
      "id" : "0",
      "title" : this.data.username,
      "description" : "description10",
      
    })

  }

  ngOnInit(){

    for(let x=0;x<this.data.services.length;x++){

      if(this.data.services[x].suggestions!=undefined){

        if(parseInt( Math.round((2/this.data.services[x].suggestions.length)*100).toFixed(2) )){
          
          this.count = parseInt( Math.round((2/this.data.services[x].suggestions.length)*100).toFixed(2) );           
          console.log(this.count);
        }
      }
    }    
  }

  

  
  
  newSuggestion: Suggestion = new Suggestion();

  addOffer(o){
        
    this.data.addOffer(o,this.id);      
    this.newOffer = new Object();    
  }  

  public toggle : boolean = false;

  addSuggestion(s){
    
    if(this.toggle){
      this.toggle = false;      
      this.data.removeSuggestion(s,this.id);
    }else{
      this.toggle = true;
      this.data.addSuggestion(s,this.id);
      this.newSuggestion = new Object();          
    }
  }

  taskSelected(s:string){    
    this.data.setAssignTo(s,this.data.username);    
  }

  
}