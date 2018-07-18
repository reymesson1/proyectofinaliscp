import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';
import { Suggestion } from '../model/suggestion.model';

@Component({
  selector: 'make-suggestions',
  templateUrl: './make-suggestions.component.html',
  styleUrls: ['./make-suggestions.component.css']
})
export class MakeSuggestionComponent {

  public id : string;

  constructor(private data: RestDataSource, private route: ActivatedRoute){

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
      }
    );
  }

  newSuggestion: Suggestion = new Suggestion();

  addSuggestion(s){

    this.data.addSuggestion(s,this.id);

    this.newSuggestion = new Object();

  }

  
}