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
  isEmpty!: boolean;

  ngOnInit(): void {
  }

  postUserInfo(){
    debugger
    if(this.userInfo.firstName == undefined
      || this.userInfo.firstName == ""
      || this.userInfo.lastName == undefined
      || this.userInfo.lastName == ""
      || this.userInfo.password == undefined
      || this.userInfo.password == ""){
      this.isEmpty = true;
      this.success = false;
      this.fail = false;
    }
    else if(this.userInfo.password == this.repetPassword 
      && this.userInfo.firstName != undefined
      &&this.userInfo.firstName != ""
      && this.userInfo.lastName != undefined
      && this.userInfo.lastName != ""
      && this.userInfo.password != undefined
      && this.userInfo.password != ""){
      this.success = true;
      this.fail = false;
      this.isEmpty = false;
      this.userInfo.firstName = "";
      this.userInfo.lastName = "";
      this.userInfo.password = "";
      this.repetPassword = "";
      this.service.PostDatas(this.userInfo).subscribe(
        (data:any)=>{
          console.log("sucess");
        }
      )
    }
    else{
      this.fail = true;
      this.success = false;
      this.isEmpty = false
    }
  }

  cancelPost(){
    this.userInfo.firstName = "";
    this.userInfo.lastName = "";
    this.userInfo.password = "";
    this.repetPassword = "";
  }



}
