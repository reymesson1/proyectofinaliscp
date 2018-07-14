import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';

@Component({
  selector: 'make-suggestions',
  templateUrl: './make-suggestions.component.html',
  styleUrls: ['./make-suggestions.component.css']
})
export class MakeSuggestionComponent {

  public id : string;
  public complexTitle: Service;
  public date: string;
  public title: string;
  public description : string;
  public category : string;
  public notes : string;
  public price : string;

  constructor(private data: RestDataSource, private route: ActivatedRoute){
    
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
      }
    );

    this.complexTitle = this.data.services.filter(
      (master) => master.id == this.id
    );

    this.title = this.complexTitle[0].title;
    this.date = this.complexTitle[0].date;
    this.description = this.complexTitle[0].description;
    this.category = this.complexTitle[0].category;
    this.notes = this.complexTitle[0].notes;    
    this.price = this.complexTitle[0].price;
  }

  
}