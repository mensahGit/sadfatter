import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],

})
export class LoginComponent implements OnInit {

  goLogin(){
      console.log("Login....");
  };

  constructor() {


    
   }

  ngOnInit() {
    
  }

}