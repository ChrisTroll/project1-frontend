import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  inputUsername = '';
  inputPassword = '';

  invalidInput = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submit() {
    const credentials = {
      username: this.inputUsername,
      password: this.inputPassword
    };
    this.loginService.loginHttp(credentials);
  }

}
