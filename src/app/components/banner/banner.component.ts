import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view/view.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  inputUsername = '';
  inputPassword = '';

  loginUser = '';
  isLoggedIn = false;

  loginSub: Subscription;

  constructor(private loginServ: LoginService, private viewServ: ViewService) { }
  
  submit() {
    const credentials = {
      username: this.inputUsername,
      password: this.inputPassword
    };
    this.loginServ.loginHttp(credentials);
  }
  logout(){
    this.loginServ.logout();
    this.isLoggedIn = false;
    this.viewServ.setView(0);
  }
  ngOnInit() {
    this.loginSub = this.loginServ.$userObs.subscribe(data => { 
      this.loginUser = data.username;
      this.isLoggedIn = true;
      this.viewServ.setView(0);
    })
  }


}
