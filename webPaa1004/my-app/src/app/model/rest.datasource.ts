import { Injectable } from '@angular/core';

@Injectable()
export class RestDataSource{

  services: any = [];

  constructor(){

    this.services = [
      {
        "id": "1",
        "date":"date1",
        "title":"Title1",
        "description":"Description1",
        "category":"Category1",
        "notes":"Notes1",
        "price":"Price1",
        "user":"User1",
      },
      {
        "id": "2",
        "date":"date2",
        "title":"Title2",
        "description":"Description2",
        "category":"Category2",
        "notes":"Notes2",
        "price":"Price2",
        "user":"User2",
      },
      {
        "id": "3",
        "date":"date3",
        "title":"Title3",
        "description":"Description3",
        "category":"Category3",
        "notes":"Notes3",
        "price":"Price3",
        "user":"User3",
      },
      {
        "id": "4",
        "date":"date4",
        "title":"Title4",
        "description":"Description4",
        "category":"Category4",
        "notes":"Notes4",
        "price":"Price4",
        "user":"User4",
      },
    ];

  }

}