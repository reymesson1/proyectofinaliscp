import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})

@Injectable()
export class ListServiceComponent {
  title = 'Listado de servicio';

  public services: any[];
  filteredData: any[];

  constructor(private data: RestDataSource){

    this.filteredData = data.services;
  }

  ngOnInit(){

  }

  search(s: string){

    this.filteredData = this.services.filter(
      (master) => master.title.toLowerCase().indexOf(s.toLowerCase()) !== -1
    );

  }


}
