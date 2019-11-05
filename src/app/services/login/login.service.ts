import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/components/models/User';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentlyLoggedIn = false;

  public user: User;

  //add a router here
  constructor(private httpClient: HttpClient) { }

  loginHttp(credentials: {username: string, password: string}) {
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };
    const url = 'http://localhost:8080/Project1/login/';
    this.httpClient.post(url, loginCredentials).subscribe((data: User) => {
          this.user = data;
          //testing output
          console.log('This is the stored User:' + JSON.stringify(this.user));
        });
    
        
  }
}
