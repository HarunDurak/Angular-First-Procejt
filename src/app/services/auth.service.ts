import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getName() {
    return localStorage.getItem('name');
  }
  isLoggedin() {
    const name = localStorage.getItem('name');
    if (name == null) {
      return false;
    } else {
      return true;
    }
  }

  logOut(){
    localStorage.removeItem('name')
  }
}
