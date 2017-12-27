import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';
import { UserProvider} from '../../providers/user/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user_pw: string;
  user_name: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public app: App,
    public storage: Storage,
    public userProvider:UserProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.loginProvider.login(this.user_name,this.user_pw)
      .subscribe(
        data=>{
          if (data.status==200) {
            let user = {
              username: data.phone_number,
              nickname: data.nickname,
              avatar: data.avatar,
              sex: data.sex
            };
            console.log("2222");
            this.userProvider.setUser(user);
            this.navCtrl.push('IndexPage');
          }else if(data.status==400){
            console.log("11111");
          }

        }, err=>{
          console.log(err);
        }

      )
  }
}
