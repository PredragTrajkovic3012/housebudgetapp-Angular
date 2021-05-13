export class User{
  constructor(public status:string,public id_user:string,private _token:string,private _tokenExpirationDate:Date)
  {

  }
  get token(){
    if(!this._tokenExpirationDate || new Date()> this._tokenExpirationDate){
      return null;
    }
    return this._token

  }
}
