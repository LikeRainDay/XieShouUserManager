/**
 * Created by housh on 2017/6/8.
 */
import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './User_login.component.html',
  styleUrls: ['./User_login.component.css']
})


// @Injectable()
export class userLoginComponent {

  title = 'app-user-login';
  userPassword: string="sss";
  userName: string="sss";


  constructor() {
  }

  clicked() {
    //点击操作

    if (this.userName == null) {
      alert("用户名不能为空");
    }
    if (this.userPassword == null) {
      alert("密码不能为空");
    }

    alert(this.userName + this.userPassword + "");

  }


}
