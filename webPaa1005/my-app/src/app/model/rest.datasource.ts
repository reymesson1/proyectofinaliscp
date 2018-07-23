import { Injectable } from "@angular/core";
import { Http,Response, Request, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import { Service } from './service.model';
import { Offer } from './offer.model';
import { Suggestion } from './suggestion.model';
import { User} from "../model/user.model";

@Injectable()
export class RestDataSource{

  services: any = [];
  authenticated: boolean = false;
  username :string;   
  password: string;
  

  apiUrl = 'http://localhost:4201/';
  headers: Headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http){
    this.getInformation().subscribe(data=>{
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

    this.http.post('http://localhost:4201/addservices', new Service(quantity,s.title,s.description,s.category,s.notes,this.username,[]), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
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
    
    //this.services[quantity].suggestions.push(new Suggestion("1",s.id));
    this.http.post('http://localhost:4201/updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services[quantity].suggestions.push(new Suggestion(quantity,s.comments,s.user));      
    });
  }

  removeSuggestion(s:Suggestion,id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.http.post('http://localhost:4201/removesuggestions', new Suggestion(index,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      console.log(new Suggestion(index,s.comments,s.user));
      //this.services[index].suggestions.push(new Suggestion("1",s.comments,s.user));      
    });


  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);
    
  }


  getAuthentication(u:User){
    this.http.post('http://localhost:4201/authentication', new User("0", this.username,this.password), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      this.authenticated=data;         
    });    
    return this.authenticated;
  }

  setRegistration(u:User){

    this.http.post('http://localhost:4201/registration', new User("0",u.username,u.password,u.firstname,u.lastname), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      console.log(data);        
    });
  }
    
  getUsers():Observable<any[]> {
  
    let url = this.apiUrl +'users';
  
    return this.http.get(url, {headers: this.headers}).map(res => res.json());    
  }


}