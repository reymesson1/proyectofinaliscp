import { Component,Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { ActivatedRoute,Params }  from '@angular/router';
import { Service } from '../model/service.model';

@Component({
  selector: 'edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})

@Injectable()
export class EditServiceComponent {

  public id : string;
  public complexTitle: Service;
  public title: string;
  public description : string;
  public category : string;
  public notes : string;
  public price : string;
  
  constructor(private route: ActivatedRoute, private data: RestDataSource){

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
      }
    );

    this.complexTitle = this.data.services.filter(
      (master) => master.id == this.id
    );

    this.title = this.complexTitle[0].title;
    this.description = this.complexTitle[0].description;
    this.category = this.complexTitle[0].category;
    this.notes = this.complexTitle[0].notes;    
    this.price = this.complexTitle[0].price;
    

  }

  
}