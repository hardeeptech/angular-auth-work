import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public setData(userdata){
    localStorage.setItem("username",userdata.token)
  }
  
  public getData(){
    return localStorage.getItem("username")
  }

  public removeData(){
    localStorage.removeItem("username")
  }

}
