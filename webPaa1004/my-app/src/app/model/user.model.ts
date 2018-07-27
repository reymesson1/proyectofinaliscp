export class User{

  constructor(
    public id?: string, 
    public username?: string, 
    public password?: string,
    public firstname?: string, 
    public lastname?: string, 
    public type?: string, 
    public status?: string, 
    public email?: string, 
  ){
  }
}