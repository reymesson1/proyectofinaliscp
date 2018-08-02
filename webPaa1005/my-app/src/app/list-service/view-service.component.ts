import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';
import { Offer } from '../model/offer.model';
import { NgForm } from '@angular/forms';
import { Suggestion } from '../model/suggestion.model';

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
  public image : string;

  public services: any[] = [];

  public isTrue : boolean = false;

  public count : number = 0;

    
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
    this.date = this.complexTitle[0].date;

    

  }

  ngOnInit(){

    for(let x=0;x<this.data.services.length;x++){
            
      if(this.data.services[x].suggestions){

        this.count+=this.data.services[x].suggestions.length;
      }
    }


  }

  newOffer : Object = new Object();
  newSuggestion: Suggestion = new Suggestion();

  addOffer(o){

    this.data.addOffer(o,this.id);      
    this.newOffer = new Object();
  }  

  public toggle : boolean = false;

  addSuggestion(s: Suggestion){

    if(this.toggle){
      this.toggle = false;
      this.data.removeSuggestion(s,this.id);
    }else{
      this.toggle = true;
      this.data.addSuggestion(s,this.id);
      this.newSuggestion = new Object();
      this.count+=1;    
      
    }
  }

  addSuggestionbyUser(s:Suggestion){
    console.log(s);
  }

  taskSelected(s:string){    
    this.data.setAssignTo(s,this.data.username);   
    this.data.sendEmail(); 
  }

}