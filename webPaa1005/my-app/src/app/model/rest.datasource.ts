import { Injectable } from "@angular/core";
import { Http,Response, Request, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import { Service } from './service.model';
import { Offer } from './offer.model';
import { Suggestion } from './suggestion.model';


@Injectable()
export class RestDataSource{

  services: any = [];
  
  constructor(private http: Http){
   
    let headers = new Headers();

    let body = JSON.stringify(
      { "username": "test", "password": "abc123" }
    )

  headers.append('Content-Type', 'application/json');

  //this.http.get('http://localhost:4201/services',{headers:headers}).map((res:Response)=>res.json())
    this.http.get('http://localhost:4201/services',{headers:headers,body:{}}).subscribe(data=>{
      console.log(data)
    })


    this.services = [
      {
        "id": "0",
        "date":"date",
        "title":"Title",
        "description":"Description",
        "category":"Category",
        "notes":"Notes",
        "price":"Price",
        "user":"User",
        "offers": [
          {
            "id":"1",
            "title":"subtitle1",
            "description": "Test Offers"            
          },{
            "id":"2",
            "title":"subtitle2",
            "description": "Test Offers"            
          },{
            "id":"3",
            "title":"subtitle3",
            "description": "Test Offers"            
          }
        ],
        "suggestions":[
          {
            "id":"1",
            "title":"suggestion1"
          }
        ]
      },
      {
        "id": "1",
        "date":"date1",
        "title":"Title1",
        "description":"Description1",
        "category":"Category1",
        "notes":"Notes1",
        "price":"Price1",
        "user":"User1",
        "offers":[],
        "suggestions":[
          {
            "id":"1",
            "title":"suggestion1"
          }
        ]
      },
      {
        "id": "2",
        "date":"date2",
        "title":"Title2",
        "description":"Description2",
        "category":"Category2",
        "notes":"Notes2",
        "price":"Price2",
        "user":"User2",
        "offers":[],
        "suggestions":[
          {
            "id":"1",
            "title":"suggestion1"
          }
        ]
      },
      {
        "id": "3",
        "date":"date3",
        "title":"Title3",
        "description":"Description3",
        "category":"Category3",
        "notes":"Notes3",
        "price":"Price3",
        "user":"User3",
        "offers":[],
        "suggestions":[
          {
            "id":"1",
            "title":"suggestion1"
          }
        ]
      },
      {
        "id": "4",
        "date":"date4",
        "title":"Title4",
        "description":"Description4",
        "category":"Category4",
        "notes":"Notes4",
        "price":"Price4",
        "user":"User4",
        "offers":[],
        "suggestions":[
          {
            "id":"1",
            "title":"suggestion1"
          }
        ]
      },
    ];
    
  }

  getServices(): Observable<Service[]>{
    return Observable.from([this.services]);
  }

  addService(s: Service){

    let quantity = this.services.length;

    this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[],[]));
  }

  addOffer(o:Offer, quantity: string){    

    this.services[quantity].offers.push(new Offer("1",o.title,o.description));    
  }

  addSuggestion(s:Suggestion,quantity: string){
    
    this.services[quantity].suggestions.push(new Suggestion("1",s.id));
  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);
    
  }

}