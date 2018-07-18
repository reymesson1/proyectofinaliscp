import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { ListServiceComponent } from '../list-service/list-service.component';

@Component({
  selector: 'offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class OfferComponent {
  
  public filteredData: any[] = [];
  public id: any;
  offers: any[]=[];

  constructor(private data: RestDataSource, private route: ActivatedRoute){

    for(let x=0;x<this.data.services.length;x++){
      
      if(this.data.services[x].offers!=undefined){
        
        for(let y=0;y<this.data.services[x].offers.length;y++){
          
          this.offers.push(this.data.services[x].offers[y]);
        }
      }
    }

    this.filteredData = this.offers;
  }

  ngOnInit(){  
  }

  search(s: string){
    
    this.filteredData = this.offers.filter(
      (master) => master.title.toLowerCase().indexOf(s.toLowerCase()) !== -1
    );
  }

  delete(s: string){

    this.filteredData = this.filteredData.filter(
      (master) => master.id != s
    );

    
  }
  
}
