export class Service{

  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public category?: string,
    public notes?: string,
    public user?: string,
    public offers?:any[],
    public suggestions?:any[],
    public assignTo?: string
  ){
  }
}