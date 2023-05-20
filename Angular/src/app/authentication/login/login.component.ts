import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/Models/loginModel';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginModel: LoginModel = new LoginModel();
  constructor(private service: AuthService) {}
  OnSubmit() {
   
    this.service.login(this.loginModel).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
