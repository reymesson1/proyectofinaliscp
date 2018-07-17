import { Injectable } from '@angular/core';

@Injectable()
export class Suggestion{

  constructor(
    public id?: string,
    public title?: string
  ){
  }
}