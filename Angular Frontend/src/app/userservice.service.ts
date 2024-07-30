import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private _http: HttpClient) { }
//Add User----------------------------------->
  addUser(obj: any) {
    return this._http.post<any>(environment._api + "/api/user/create", obj)
  }
  //Get User----------------------------------->
  getUser() {
    return this._http.get<any>(environment._api + "/api/user/list")
  }
  
}
