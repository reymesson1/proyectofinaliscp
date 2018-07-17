import { Injectable } from '@angular/core';

@Injectable()
export class Offer{

  constructor(
    public id?: string,
    public title?: string,
    public description?: string    
  ){
  }
}