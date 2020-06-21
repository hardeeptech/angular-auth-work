import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  BASEURI: string = ""
  constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl:  string) {
    this.BASEURI = _baseUrl
   }

  login(form){
    return this.http.post(this.BASEURI + '/auth/login', form)
  }
}
