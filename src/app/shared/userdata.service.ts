import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public setData(userdata){
    sessionStorage.setItem("username",userdata.username)
  }
  
  public getData(){
    return sessionStorage.getItem("username")
  }

  public removeData(){
    sessionStorage.removeItem("username")
  }

}
