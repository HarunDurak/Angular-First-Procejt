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
}
