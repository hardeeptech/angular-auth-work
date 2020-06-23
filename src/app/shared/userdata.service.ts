import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public setData(userdata){
    localStorage.setItem("username",userdata.token)
    localStorage.setItem("name",userdata.name)
  }
  
  public getData(){
    return localStorage.getItem("username")
  }

  public getName(){
    return localStorage.getItem("name")
  }

  public removeData(){
    localStorage.removeItem("username")
  }

}
