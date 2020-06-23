import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserdataService } from '../userdata.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  Token = ''
  BaseURI = ''
  constructor(private http: HttpClient, @Inject('BASE_URL') _baseurl, private userdata: UserdataService) {
    this.Token = userdata.getData()
    this.BaseURI = _baseurl
   }

  addGroup(formData) {
    
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    console.log(headers_object);
    return this.http.post(this.BaseURI + '/sewacrud/Addsewa', formData, {headers: headers_object});
  }

  getAllGroupList(){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.get(this.BaseURI + "/sewacrud/GetSewaList", {headers: headers_object})
  }

  getGroupById(groupId){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.get(this.BaseURI + "/sewacrud/GetSewaById?id="+groupId, {headers: headers_object})
  }

  updateGroup(formData,id) {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.put(this.BaseURI + '/sewacrud/UpdateSewa?id='+id, formData, {headers: headers_object});
  }

  deleteGroupById(groupId){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.delete(this.BaseURI + "/sewacrud/DeleteSewa?id="+groupId, {headers: headers_object})
  }
}
