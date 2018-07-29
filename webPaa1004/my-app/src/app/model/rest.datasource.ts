import { Injectable } from "@angular/core";
import { Http, Headers, Response , Request, RequestMethod, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";
import { Service } from './service.model';
import { Offer } from './offer.model';
import { Suggestion } from './suggestion.model';
import { User } from "./user.model";

@Injectable()
export class RestDataSource{

  services: any = [];  
  authenticated: boolean = false;
  username :string;   
  password: string;
  isValidatedUser: any[] = [];
  
  apiUrl = 'http://localhost:4204/';
  headers: Headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http:Http){

    this.getInformation().subscribe(data=>{
      
      this.services = data;
    },(err)=>{console.log(err)});

    console.log(this.getUsers()); 

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

    this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]));

    this.http.post('http://localhost:4204/addservices', new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[],[],""), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      console.log('Successfully added');
      //this.services.push(new Service(quantity,s.title,s.description,s.category,s.notes,s.user,[]));      
    });

  }

  addOffer(o:Offer, quantity: string){  
    
    this.http.post('http://localhost:4204/updateoffers', new Offer(quantity,o.title,o.description), {headers: this.headers}).map(res => res.json()).subscribe(data=>{                
      this.services[parseInt(quantity)].offers.push(new Offer(quantity,o.title,o.description));    
    });
  }

  addSuggestion(s:Suggestion, quantity: string){

    this.http.post('http://localhost:4204/updatesuggestions', new Suggestion(quantity,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      this.services[quantity].suggestions.push(new Suggestion("1",s.comments,s.user));      
    });

  }

  removeSuggestion(s:Suggestion, id: string){

    let index = this.services.findIndex(line => line.id == id);    

    console.log(new Suggestion(index,s.comments,s.user));
    this.http.post('http://localhost:4204/removesuggestions', new Suggestion(index,s.comments,s.user), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      
      console.log(new Suggestion(index,s.comments,s.user));
      //this.services[index].suggestions.push(new Suggestion("1",s.comments,s.user));      
    });
        
    //this.services[id].suggestions.splice(parseInt(index),1);
  }

  removeService(id: string){

    let index = this.services.findIndex(line => line.id == id);    

    this.services.splice(parseInt(index),1);    
  }

  getAuthentication(u:User){
    this.http.post('http://localhost:4204/authentication', new User("0", this.username,this.password), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      this.authenticated=data;         
    });    
    return this.authenticated;
  }

  setRegistration(u:User){

    this.http.post('http://localhost:4204/registration', new User(u.id,u.username,u.password,u.firstname,u.lastname,u.type,u.status,u.email), {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      console.log(data);        
    });


  }

  getUsers(){

    this.http.post('http://localhost:4204/getusers', {"username":this.username}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      this.isValidatedUser = data;
    });

    return this.isValidatedUser;
        
  }

  setAssignTo(s:string,u:string){

    this.services[parseInt(s)].assignTo=u;
    this.http.post('http://localhost:4204/assignto', {"id":s,"username":u}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
      console.log(data);        
    });
  }

  setUpdateRegistration(u:string,p:string){

    
    this.http.post('http://localhost:4204/setusers', {"username":u,"password":p}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log('done');
    });
        
  }

  sendEmail(){
    this.sendEmail();
    this.http.post('http://localhost:4202/sendemail', {"id":"123","username":"joseperez"}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log('done');
    });

  }

  forgotPassword(email:string){

    let password = "data";

    this.http.post('http://localhost:4204/forgotpassword', {"email":email}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log(data[0].password);
      password=data[0].password;
      this.http.post('http://localhost:4202/sendpassword', {"email":email,"password":password}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
            
        console.log('done'); 
      });

    });

  }

  getAllUsers():Observable<any> {
    let url = this.apiUrl +'users';
	  return this.http.get(url, {headers: this.headers}).map(res => res.json());
  }

  disableUser(s:string){

    this.http.post('http://localhost:4204/statususer', {"id":s,"status":"inactive"}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log('done');
    });

    console.log('disable');
  }  

  ableUser(s:string){
    
    this.http.post('http://localhost:4204/statususer', {"id":s,"status":"Active"}, {headers: this.headers}).map(res => res.json()).subscribe(data=>{
          
      console.log('done');
    });

    console.log('able');
  }  


}