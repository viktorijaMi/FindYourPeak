import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:9091/api/user/add";

  constructor(private httpClient: HttpClient) { }


  addUser(user: UserModel): Observable<Object> {
    console.log('vo add usser sum')
    return this.httpClient.put(`${this.baseURL}`, user);
  }

}
