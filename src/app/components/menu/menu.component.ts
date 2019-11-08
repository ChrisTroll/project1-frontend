import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/components/models/User';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view/view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private isManager = false;
  private user: User;
  private userSub: Subscription;
  private isLoggedin = false;

  constructor(private lServ: LoginService, private ticketServ: TicketService, private viewServ: ViewService) { 
  }

  showTicketSubmit(){
    this.viewServ.setView(1);
  }

  showPastView(){
    this.viewServ.setView(2);
    this.ticketServ.getPastTickets(this.user);
  }

  showReviewView(){
    this.viewServ.setView(3);
    this.ticketServ.getReviewable(this.user);
  }

  getManager(){
    if (this.user.userrole === 2){
      this.isManager = true;
    } else {
      this.isManager = false;
    }
  }

  ngOnInit() {
    this.userSub = this.lServ.$userObs.subscribe(data => {
      this.user = data
      this.getManager()
      if(this.user.username != null){
        this.isLoggedin = true;
      } else {
        this.isLoggedin = false;
      }
      console.log(JSON.stringify(this.user))
    });
  }

}
