import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/components/models/User';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  nullUser: User = {
    username: null,
    password: null,
    userrole: null,
    userid: null
  }

  private user: Subject<User> = new Subject();
  public $userObs: Observable<User> = this.user.asObservable();

  //add a router here
  constructor(private httpClient: HttpClient) { }

  loginHttp(credentials: {username: string, password: string}){
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };
    const url = 'http://localhost:8080/Project1/login/';
    this.httpClient.post(url, loginCredentials).subscribe((data: User) => {
      this.user.next(data);
    });
  }
  logout(){
    this.user.next(this.nullUser);
  }
}
