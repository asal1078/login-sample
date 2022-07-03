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
  success!: boolean;
  fail!: boolean;

  ngOnInit(): void {
  }

  postUserInfo(){
    if(this.userInfo.password == this.repetPassword){
      this.success = true;
      this.fail = false;
      this.service.PostDatas(this.userInfo).subscribe(
        (data:any)=>{
        }
      )
    }
    else{
      this.fail = true;
      this.success = false
    }
  }




}
