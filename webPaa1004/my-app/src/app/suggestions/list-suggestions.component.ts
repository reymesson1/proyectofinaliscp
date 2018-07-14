import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';

@Component({
  selector: 'suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrls: ['./list-suggestions.component.css']
})
export class SuggestionComponent {

  public services: any[];
  public filteredData: any[];
  public id: any;

  constructor(private data: RestDataSource, private route: ActivatedRoute){
    
    this.filteredData = this.data.services;      
  }

  ngOnInit(){

  }

  search(s: string){

    this.filteredData = this.data.services.filter(
      (master) => master.title.toLowerCase().indexOf(s.toLowerCase()) !== -1
    );
  }

  delete(s: string){

    this.filteredData = this.filteredData.filter(
      (master) => master.id != s
    );

    
  }
  
}
