import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  idUser:string;


  constructor(private http: HttpClient)
  {

  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  setData(data)
  {
    this.idUser=data.id_user

  }

  checkUser() {
    const _header = {headers: new HttpHeaders({Authorization: localStorage.getItem("token")})};
    return this.http.post('/api/users/login', _header);

  }
  remove_token() {
    delete this.token;
    localStorage.removeItem("token");
  }
  remove_data() {
    delete this.idUser;

  }
  logout(){
    this.remove_token();
    this.remove_data()
  }

}
