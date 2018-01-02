import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninProvider } from '../../providers/signin/signin';
import { UserProvider} from '../../providers/user/user';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  user_name: string="";
  user_pw: string="";
  reuser_pw: string="";

  isshow:boolean=false;
  textinform:string="";

  isshowun:boolean=false;
  textinformun:string="";

  isshowpw:boolean=false;
  textinformpw:string="";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public signinProvider: SigninProvider,
    public userProvider:UserProvider,
    public alertCtrl: AlertController,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  signup(){
    if(this.user_pw=="" || this.user_name=="" || this.user_pw!=this.reuser_pw){
      if(this.user_pw==""){
        this.isshowpw=true;
        this.textinformpw="密码不能为空";
      }else{
        this.isshowpw=false;
      }
      if(this.user_name==""){
        this.isshowun=true;
        this.textinformun="用户名不能为空";
      }else{
        this.isshowun=false;
      }
      if(this.user_pw!=this.reuser_pw){
        this.isshow = true;
        this.textinform = "两次密码不一致"
      }else{
        this.isshow=false;
      }
    }
    else{
      this.isshowpw=false;
      this.isshowun=false;
      this.isshow=false;
      this.signinProvider.signin(this.user_name,this.user_pw).subscribe(
        data=>{
          if(data.status == 200){
            let alert = this.alertCtrl.create({
              title: '注册成功',
              subTitle: '点击确定按钮登陆',
              buttons: ['确定'],
            });
            alert.present();
            this.navCtrl.push('LoginPage');
          }
          else{
            let alert = this.alertCtrl.create({
              title: '注册失败',
              subTitle: '该用户名已经存在',
              buttons: ['确定'],
            });
            alert.present();
            this.navCtrl.push('SigninPage');
          }
        });
    }
  }
}
