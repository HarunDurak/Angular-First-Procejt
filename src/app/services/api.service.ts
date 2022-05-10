import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  login(userInfo:any) {
    return this.httpClient.post<any[]>('http://localhost:3000/login',userInfo);
  }

  users() {
    return this.httpClient.get<any[]>('http://localhost:3000/users');
  }

  user(name: any) {
    return this.httpClient.get<any[]>('http://localhost:3000/users/'+name);
  }

  addFav(fav:any) {
    return this.httpClient.post<any[]>('http://localhost:3000/addFav',fav);
  }

  removeFav(fav:any) {
    return this.httpClient.post<any[]>('http://localhost:3000/removeFav',fav);
  }


}
