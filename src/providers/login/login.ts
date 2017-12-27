import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  url: string = 'http://localhost:3000' + '/login/';
  constructor(
    public http: Http,
  ) {
    console.log('Hello LoginProvider Provider');
  }
  login(user_name,user_pw){
    return this.http.post(this.url+'login',{user_name:user_name,user_pw:user_pw})
    .map(res => res.json());
  }
}
