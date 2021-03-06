import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { RestDataSource } from '../model/rest.datasource';
import { User } from "../model/user.model";

@Injectable()
export class AuthGuard {

  authenticated : any = {};

  constructor(private router: Router, private data: RestDataSource) { }

  canActivate(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

       this.authenticated = this.data.getAuthentication(new User("0",this.data.username,this.data.password));

       console.log(this.authenticated);

       if(this.authenticated.authenticated){
        return true;
       }else{
        this.router.navigateByUrl('/admin');
       return false;
      }

  }

}