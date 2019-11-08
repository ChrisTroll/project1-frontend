import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view/view.service';
import { User } from '../models/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-ticketarea',
  templateUrl: './ticketarea.component.html',
  styleUrls: ['./ticketarea.component.css']
})
export class TicketareaComponent implements OnInit {

  private view = 0;
  private viewSub: Subscription;

  userSub: Subscription;
  user: User;

  constructor(private viewServ: ViewService, private lServ: LoginService) { }

  ngOnInit() {
    this.viewSub = this.viewServ.$view.subscribe(data => {
      this.view = data
    })
    this.userSub = this.lServ.$userObs.subscribe(data => {
      this.user = data
    })
  }

  ngOnDestroy(){
    this.viewSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
