import { Component } from '@angular/core';
import {LoginForm} from '../auth';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: LoginForm=
  { email: '',
    password: ''
  }
  constructor( private authService: AuthService) 
  { }
  submit() 
  { 
    this.authService.login(this.form)
    console.log(this.form)
  }
}
