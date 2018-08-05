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
  authenticated: any = {};
  username :string;   
  password: string;
  isValidatedUser: any[] = [];

  apiUrl = 'http://localhost:4201/';
  //apiUrl = 'http://159.203.156.208:4201/';
  headers: Headers = new Headers(
    {
      'Access-Control-Allow-Origin': '*',      
      'Content-Type': 'application/json'
    }
  );

  public today : Date;

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
    this.today = new Date();        
    this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[],[],"",this.today.toLocaleString()), s.price);      

    //this.http.post('http://159.203.156.208:4201/addservices', new Service(quantity,s.title,s.description,s.category,s.notes,this.username,[],[],"",this.today.toLocaleString(),s.price), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post( this.apiUrl+'addservices', new Service(quantity,s.title,s.description,s.category,s.notes,this.username,[],[],"",this.today.toLocaleString(),s.price), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    
      console.log('Added successfully');
    });


  }

  addOffer(o:Offer, quantity: string){    

    
    //this.http.post('http://159.203.156.208:4201/updateoffers', new Offer(quantity,o.title,o.description), {headers: this.headers}).map(res => res.json()).subscribe(data=>{                
    this.http.post(this.apiUrl+'updateoffers', new Offer(quantity,o.title,o.description), {headers: this.headers}).map(res => res.json()).subscribe(data=>{                
      this.services[parseInt(quantity)].offers.push(new Offer(quantity,o.title,o.description));    
    });

  }

  addSuggestion(s:Suggestion,quantity: string){
        
    //this.http.post('http://159.203.156.208:4201/updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services[quantity].suggestions.push(new Suggestion(quantity,s.comments,s.user));      
    });
  }

  removeSuggestion(s:Suggestion,id: string){

    let index = this.services.findIndex(line => line.id == id);    

    //this.http.post('http://159.203.156.208:4201/removesuggestions', new Suggestion(index,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'removesuggestions', new Suggestion(index,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      console.log(new Suggestion(index,s.comments,s.user));      
    });


  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);
    
  }


  getAuthentication(u:User){
    //this.http.post('http://159.203.156.208:4201/authentication', new User("0", this.username,this.password), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'authentication', new User("0", this.username,this.password), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      this.authenticated=data;         
    });    
    return this.authenticated;
  }

  setRegistration(u:User){

    //this.http.post('http://159.203.156.208:4201/registration', new User(u.id,u.username,u.password,u.firstname,u.lastname,u.type,u.status,u.email), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'registration', new User(u.id,u.username,u.password,u.firstname,u.lastname,u.type,u.status,u.email), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      console.log(data);        
    });
  }
    
  getUsers(){
    
      //this.http.post('http://159.203.156.208:4201/getusers', {"username":this.username}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      this.http.post(this.apiUrl+'getusers', {"username":this.username}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
            
        this.isValidatedUser = data;
      });
  
      return this.isValidatedUser;
          
  }

  setAssignTo(s:string,u:string){

    this.services[parseInt(s)].assignTo=u;
    //this.http.post('http://159.203.156.208:4201/assignto', {"id":s,"username":u}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'assignto', {"id":s,"username":u}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      console.log(data);        
    });
  }

  setUpdateRegistration(u:string,p:string){
    
        //this.http.post('http://159.203.156.208:4201/setusers', {"username":u,"password":p}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
        this.http.post(this.apiUrl+'setusers', {"username":u,"password":p}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
              
          console.log('done');
        });
            
  }

  sendEmail(){

    //this.http.post('http://159.203.156.208:4202/sendemail', {"id":"123","username":"joseperez"}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'sendemail', {"id":"123","username":"joseperez"}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log('done');
    });
  }

  forgotPassword(email:string){
    
    let password = "data";

    //this.http.post('http://159.203.156.208:4201/forgotpassword', {"email":email}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'forgotpassword', {"email":email}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      //password="http://159.203.156.208:4205/validation/"+data[0].username;
      password="http://localhost:4201/validation/"+data[0].username;
      // this.http.post('http://159.203.156.208:4202/sendpassword', {"email":email,"password":password}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      this.http.post('http://localhost:4202/sendpassword', {"email":email,"password":password}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
            
        console.log('done'); 
      });

    });

  }

  getAllUsers():Observable<any> {
    let url = this.apiUrl +'allusers';
	  return this.http.get(url, {headers: this.headers}).map(res => res.json());
  }

  validate(u:string,p:string){

    //this.http.post('http://159.203.156.208:4201/setusers', {"username":u,"password":p}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
    this.http.post(this.apiUrl+'setusers', {"username":u,"password":p}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
              
      console.log('done');
    });

  }


}