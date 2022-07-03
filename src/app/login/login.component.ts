import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from './model/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService
  ) { }

  userInfo : LoginModel = new LoginModel();
  repetPassword!:any;

  ngOnInit(): void {
  }




}
