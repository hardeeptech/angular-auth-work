import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserdataService } from '../userdata.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  BaseUrl = ''
  Token = ''
  constructor(private http: HttpClient, @Inject('BASE_URL') _base, private userdata: UserdataService) { 
    this.BaseUrl = _base
    this.Token = userdata.getData()
  }

  public addGroup(form){
    var header_object = new HttpHeaders().set("Authorization","Bearer "+ this.Token)
    return this.http.post(this.BaseUrl + "/sewacrud/addsewa",form, { headers: header_object})
  }

  public getGroupList(){
    var header_object = new HttpHeaders().set("Authorization","Bearer "+ this.Token)
    return this.http.get(this.BaseUrl + "/sewacrud/getsewalist", { headers: header_object})
  }

  public getGroupById(id){
    var header_object = new HttpHeaders().set("Authorization","Bearer "+ this.Token)
    return this.http.get(this.BaseUrl + "/sewacrud/getsewabyid?id="+id, { headers: header_object})
  }

  public updateGroup(form, id){
    var header_object = new HttpHeaders().set("Authorization","Bearer "+ this.Token)
    return this.http.put(this.BaseUrl + "/sewacrud/updatesewa?id="+id, form, { headers: header_object})
  }

  public deleteGroup(id){
    var header_object = new HttpHeaders().set("Authorization","Bearer "+ this.Token)
    return this.http.delete(this.BaseUrl + "/sewacrud/deletesewa?id="+id, { headers: header_object})
  }
}
