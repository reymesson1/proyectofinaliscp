import { Injectable } from "@angular/core";
import { Http, Headers, Response , Request, RequestMethod, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";
import { Service } from './service.model';
import { Offer } from './offer.model';
import { Suggestion } from './suggestion.model';

@Injectable()
export class RestDataSource{

  services: any = [];   
  
  apiUrl = 'http://localhost:4201/';
  headers: Headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http:Http){

    this.getInformation().subscribe(data=>{
      
      this.services = data;
    },(err)=>{console.log(err)});
  }
  
  ngOnInit(){
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

    //this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]));

    this.http.post('http://localhost:4201/addservices', new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[],[]), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]));      
    });

  }

  addOffer(o:Offer, quantity: string){  
    
    this.http.post('http://localhost:4201/updateoffers', new Offer(quantity,o.title,o.description), {headers: this.headers}).map(res => res.json()).subscribe(data=>{                
      this.services[parseInt(quantity)].offers.push(new Offer(quantity,o.title,o.description));    
    });
  }

  addSuggestion(s:Suggestion, quantity: string){

    this.http.post('http://localhost:4201/updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services[quantity].suggestions.push(new Suggestion("1",s.comments,s.user));      
    });

  }

  removeSuggestion(s:Suggestion, id: string){

    let index = this.services.findIndex(line => line.id == id);    

    console.log(new Suggestion(index,s.comments,s.user));
    this.http.post('http://localhost:4201/removesuggestions', new Suggestion(index,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      console.log(new Suggestion(index,s.comments,s.user));
      //this.services[index].suggestions.push(new Suggestion("1",s.comments,s.user));      
    });
        
    //this.services[id].suggestions.splice(parseInt(index),1);
  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);    
  }


}