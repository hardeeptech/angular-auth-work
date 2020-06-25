import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  secureKey = "pracctice@#$%#@112./+"
  constructor() { }

  public setData(userdata){
    
    var enc = CryptoJS.AES.encrypt(userdata.token, this.secureKey).toString();

    localStorage.setItem("token",enc)
    localStorage.setItem("name",userdata.name)
  }
  
  public getData(){
    var dev = CryptoJS.AES.decrypt(localStorage.getItem("token"), this.secureKey).toString(CryptoJS.enc.Utf8);

    return dev
  }

  public getName(){
    return localStorage.getItem("token")
  }

  public removeData(){
    localStorage.removeItem("token")
  }

}
