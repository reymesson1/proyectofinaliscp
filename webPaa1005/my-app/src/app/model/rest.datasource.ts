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

  apiUrl = 'http://localhost:4201/';
  headers: Headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http){
    this.getInformation().subscribe(data=>{
      console.log(data);
      this.services = data;
    },(err)=>{console.log(err)});
  }

  getInformation():Observable<any> {
    let url = this.apiUrl +'services';
	  return this.http.get(url, {headers: this.headers}).map(res => res.json());
	}

  getServices(): Observable<Service[]>{
    return Observable.from([this.services]);
  }

  addService(s: Service){

    let quantity = this.services.length;

    //this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[],[]));

    this.http.post('http://localhost:4201/addservices', new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]));      
    });


  }

  addOffer(o:Offer, quantity: string){    

    //this.services[quantity].offers.push(new Offer("1",o.title,o.description));    

    this.http.post('http://localhost:4201/updateoffers', new Offer(quantity,o.title,o.description), {headers: this.headers}).map(res => res.json()).subscribe(data=>{                
      this.services[parseInt(quantity)].offers.push(new Offer(quantity,o.title,o.description));    
    });

  }

  addSuggestion(s:Suggestion,quantity: string){
    
    console.log(s);
    //this.services[quantity].suggestions.push(new Suggestion("1",s.id));
    this.http.post('http://localhost:4201/updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services[quantity].suggestions.push(new Suggestion(quantity,s.comments,s.user));      
    });
  }

  removeSuggestion(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services[index].suggestions.clear();
    console.log(this.services[index].suggestions);
    
    //this.services[id].suggestions.splice(parseInt(index),1);
  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);
    
  }

}