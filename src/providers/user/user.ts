import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { User } from '../../model/user.model';
@Injectable()
export class UserProvider {
  url = 'http://localhost:3000' + '/users/';
  user: User = new User();

  constructor(
    public http: Http,
    private storage: Storage
  ) {
  }

  // 加载app是初始化事件
  init() {
    this.storage.get('user')
      .then(user => {
        if(user) {
          this.user = user;
        }
      })
  }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
    this.storage.set('user', user);
  }

  getUserinfo(username){
    return this.http.post(this.url + 'getUserinfo', {username: username})
       .map( res => res.json());
  }

  initAddress(username) {
    return this.http.post(this.url + 'initAddress', {username: username})
      .map(res => res.json())
  }

  add_address(address: any, phone_number: string) {
    return this.http.post(this.url + 'addAddress', {username: phone_number, address: address})
      .map(res => res.json())
  }

  // 设为默认
  setActive(id: string, phone_number) {

    return this.http.post(this.url + 'setActive', {username: phone_number, id: id})
      .map(res => res.json())
  }

  // 删除地址
  removeAddress(id: string, phone_number) {
    return this.http.post(this.url + 'removeAddress', {username: phone_number, id: id})
      .map(res => res.json())
  }

  // 编辑地址
  editAddress(address, phone_number) {
    return this.http.post(this.url + 'editAddress', {username: phone_number, address: address})
      .map(res => res.json())
  }

  // 添加足迹
  addHistory(phone: string, goods_id: string, price: number) {
    return this.http.post(this.url + 'addHistory', {phone: phone, goods_id: goods_id, price: price})
      .map(res => res.json())
  }

  // 初始化足迹
  initHistory(phone) {
    return this.http.post(this.url + 'initHistory', {phone: phone})
      .map(res => res.json())
  }

  // 改变头像
  changeAvatar(avatar, phone_number) {
    return this.http.post(this.url + 'changeAvatar', {avatar: avatar, phone_number: phone_number})
      .map(res => res.json())
  }

  //获得本机ip
  getIp(user){
    return this.http.post(this.url + 'getIp', {user: user})
      .map( res => res.json());
  }

  // 获得抽奖商品
  getLottery(phone_number: string){
    return this.http.post(this.url + 'getLottery', {phone_number: phone_number})
      .map( res => res.json());
  }

  // 提醒秒杀
  remindSpike(phone_number, spike_id) {
    return this.http.post(this.url + 'remindSpike', {phone_number: phone_number, spike_id: spike_id})
      .map( res => res.json());
  }

  // 移除秒杀
  removeSpike(phone_number, spike_id) {
    return this.http.post(this.url + 'removeSpike', {phone_number: phone_number, spike_id: spike_id})
      .map( res => res.json());
  }

  // 获取我的秒杀
  getSpikes(phone_number) {
    return this.http.post(this.url + 'getSpikes', {phone_number: phone_number})
      .map( res => res.json());
  }

  // 获取店铺销量
  getSales(owner) {
    return this.http.post(this.url + 'getSales', {owner: owner})
      .map( res => res.json());
  }

  getShopReputation(owner: string) {
    return this.http.post(this.url + 'getShopReputation', {owner: owner})
      .map( res => res.json());
  }

  getUserPoint(username: string) {
    return this.http.post(this.url + 'getUserPoint', {username: username})
      .map( res => res.json());
  }

  getNicknameAndAvatar(username: string) {
    return this.http.post(this.url + 'getNicknameAndAvatar', {username: username})
      .map( res => res.json());
  }

}
