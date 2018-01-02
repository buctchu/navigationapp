import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the SigninProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SigninProvider {
url: string = 'http://localhost:3000' + '/signin/';
  constructor(
    public http: Http,
  ) {
    console.log('Hello SigninProvider Provider');
  }
  signin(user_name,user_pw){
    return this.http.post(this.url+'signin',{user_name:user_name,user_pw:user_pw})
     .map(res=> res.json());
  }
}
