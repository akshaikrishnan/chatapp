import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
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

  constructor(public a:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  setls(){
    localStorage.setItem("user",this.email.toString());
    this.router.navigateByUrl("")
  }

}
