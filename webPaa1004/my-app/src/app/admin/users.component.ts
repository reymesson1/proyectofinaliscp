import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { User } from "../model/user.model";

@Component({
    selector: 'users',
    templateUrl: "users.component.html"
})

export class UsersComponent{

    users: any[] = [];

    filteredData: any[] = [];

    constructor(private data: RestDataSource){

        this.data.getAllUsers().subscribe(data=>{            
            this.users = data;      
        });

        this.filteredData = this.users;

    }


    ngOnInit(){
    
        this.data.getAllUsers().subscribe(data=>{
          
          this.filteredData = data;
        },(err)=>{console.log(err)});
    }

    search(s: string){
        
            this.filteredData = this.users.filter(
              (master) => master.username.toLowerCase().indexOf(s.toLowerCase()) !== -1
            );
    }

    disable(s:string){

        this.filteredData[s].status = 'inactive'

        this.data.disableUser(s);        
    }

    able(s:string){
        
        this.filteredData[s].status = 'Active'

        this.data.ableUser(s);        
    }

    delete(s:string){

        console.log(s);
    }

}