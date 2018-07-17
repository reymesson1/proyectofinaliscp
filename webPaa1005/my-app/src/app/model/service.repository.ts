import { Injectable } from '@angular/core';
import { Service } from './service.model';

@Injectable()
export class ServiceRepository{

  private services: Service[] = [];

  constructor(){
    
  }

}