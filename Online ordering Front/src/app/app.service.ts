import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }



  login(data){
    return this._http.post<any>('api/users/login',data);
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (err) {
      return null;
    }
  }


  getUserpermissions() {
    if (this.loggedIn()) {
      return this.getDecodedAccessToken(localStorage.getItem("token")).type;
    } else {
      return null;
    }
  }



  register(data){
    return this._http.post<any>('/api/users/register',data);
  }
}

