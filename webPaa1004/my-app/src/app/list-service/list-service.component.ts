import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';

@Component({
  selector: 'list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})

@Injectable()
export class ListServiceComponent {
  
  public services: any[] = [];
  public filteredData: any[] = [];
  public id: any;

  constructor(private data: RestDataSource, private route: ActivatedRoute){
    
    this.data.getServices().subscribe(data=>{
      
      this.services = data;      
    });

    this.filteredData = this.services;
  }

  ngOnInit(){

    this.data.getInformation().subscribe(data=>{
      
      this.filteredData = data;
    },(err)=>{console.log(err)});
  }

  search(s: string){

    this.filteredData = this.services.filter(
      (master) => master.title.toLowerCase().indexOf(s.toLowerCase()) !== -1
    );
  }

  delete(s: string){

    // this.filteredData = this.filteredData.filter(
    //   (master) => master.id != s
    // );

    this.data.removeService(s);
    
  }

}