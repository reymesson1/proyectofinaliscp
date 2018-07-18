import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';

@Component({
  selector: 'suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrls: ['./list-suggestions.component.css']
})
export class SuggestionComponent {

  public filteredData: any[] = [];
  public id: any;
  suggestions: any[] = [];

  constructor(private data: RestDataSource, private route: ActivatedRoute){
    
    for(let x=0;x<this.data.services.length;x++){
      
      if(this.data.services[x].suggestions!=undefined){
        
        for(let y=0;y<this.data.services[x].suggestions.length;y++){

          this.suggestions.push(this.data.services[x].suggestions[y]);
        }

      }

    }

    this.filteredData = this.suggestions;      
  }

  ngOnInit(){

  }

  search(s: string){

    this.filteredData = this.suggestions.filter(
      (master) => master.title.toLowerCase().indexOf(s.toLowerCase()) !== -1
    );
  }

  delete(s: string){

    this.filteredData = this.filteredData.filter(
      (master) => master.id != s
    );

    
  }
  
}
