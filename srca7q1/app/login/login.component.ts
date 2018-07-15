import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }
  submitLogin(uname,pass)
  {
    this.username=uname;
    this.password=pass;
    console.log("Username:"+uname+"Password:"+pass);
  }

}
