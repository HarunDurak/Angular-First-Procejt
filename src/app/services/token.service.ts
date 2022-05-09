import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

   isAuthorized(){
     if(localStorage.getItem('name'))
     {
       return true
     }
     return false
   }

}
