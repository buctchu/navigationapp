import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';
import { UserProvider} from '../../providers/user/user';
import { AlertController } from 'ionic-angular';

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
  user_pw: string="";
  user_name: string="";
  isshowpw:boolean=false;
  isshowun:boolean=false;
  textinformpw:string="";
  textinformun:string="";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public app: App,
    public storage: Storage,
    public userProvider:UserProvider,
    public alertCtrl: AlertController,
    ) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.user_name=="" || this.user_pw==""){
      if(this.user_name==""){
        this.isshowun=true;
        this.textinformun ="用户名不能为空";
      }else {
        this.isshowun=false;
      }
      if(this.user_pw==""){
        this.isshowpw=true;
        this.textinformpw ="密码不能为空";
      }else{
        this.isshowpw=false;
      }
    }
    else{
      this.isshowun=false;
      this.isshowpw=false;
        this.loginProvider.login(this.user_name,this.user_pw).subscribe(
          data=>{
            if (data.status==200) {
              let user = {
                username: data.phone_number,
                nickname: data.nickname,
                avatar: data.avatar,
                sex: data.sex
              };
              console.log("11111");
              this.userProvider.setUser(user);
              let alert = this.alertCtrl.create({
                title: '登陆成功',
                subTitle: '',
                buttons: ['确定']
              });
              this.navCtrl.push('IndexPage');
            }else if(data.status==400){
              console.log("2222");
              let alert = this.alertCtrl.create({
                title: '登陆失败',
                subTitle: '登陆密码错误',
                buttons: ['确定']
              });
              alert.present();
            }else{
              console.log("3333");
              let alert = this.alertCtrl.create({
                title: '登陆失败',
                subTitle: '用户名不存在',
                buttons: ['确定']
              });
              alert.present();
            }

          }, err=>{
            console.log(err);
          }
        )
     }
  }

  gosignup(){
    console.log("sign");
    this.navCtrl.push('SigninPage');
  }
}
