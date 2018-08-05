import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogged : boolean = false;
  constructor(private router: Router,private data: RestDataSource){

    this.isLogged = this.data.authenticated.authenticated;
  }

  logoff(){
    
    this.router.navigateByUrl('/home');
    window.location.reload();
  }
  


}