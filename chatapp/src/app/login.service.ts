import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  userType = 'login';
  getUser(){
    this.userType==='login' ? this.userType ='signup' : this.userType ='login';
    console.log(this.userType);

  }
}
