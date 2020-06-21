import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserdataService } from '../userdata.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaserviceService {

  BaseURI = ''
  Token = ''
  constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string, private userdata: UserdataService) { 
    this.BaseURI = _baseUrl
    this.Token = userdata.getData()
  }

  addArea(formData){
    var addHeaders = new HttpHeaders().set("Authorization", this.userdata.getData())
    return this.http.post(this.BaseURI+ 'areacrud/AddArea', formData, { headers: addHeaders })
  }

  updateArea(formData,id) {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.put(this.BaseURI + '/areacrud/UpdateArea?id='+id, formData, {headers: headers_object});
  }

  getAllAreaList() {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.get(this.BaseURI + "/areacrud/GetAreaList", {headers: headers_object})
  }

  getAreaById(inchargeId){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.get(this.BaseURI + "/areacrud/GetAreaById?id="+inchargeId, {headers: headers_object})
  }

  deleteAreaById(inchargeId){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.Token);
    return this.http.delete(this.BaseURI + "/areacrud/DeleteArea?id="+inchargeId, {headers: headers_object})
  }
}
