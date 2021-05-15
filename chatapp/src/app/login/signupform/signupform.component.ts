import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  username = new FormControl('');
  getErrorMessage2() {
    if (this.email.hasError('required')) {
    return 'You must enter a value';
  }
  else return 0;
  }
  hide = true;

  constructor(public a: LoginService) { }
  getUser() {
    
  }

  ngOnInit(): void {
  }

}
