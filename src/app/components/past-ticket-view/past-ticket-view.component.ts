import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Ticket } from 'src/app/components/models/Ticket';
import { User } from 'src/app/components/models/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-past-ticket-view',
  templateUrl: './past-ticket-view.component.html',
  styleUrls: ['./past-ticket-view.component.css']
})
export class PastTicketViewComponent implements OnInit {

  ticketsub: Subscription;
  tickets: Ticket[] = [];
  userSub: Subscription;
  user: User;

  constructor(private ticketServ: TicketService, private loginServ: LoginService) { }

  ngOnInit() {
    this.ticketsub = this.ticketServ.$TicketsObs.subscribe(data => {
      this.tickets = data;
    })
    this.userSub = this.loginServ.$userObs.subscribe(data => {
      this.user = data;
    })
  }
  
  ngOnDestroy(){
    if(this.ticketsub){
      this.ticketsub.unsubscribe();
    };
    if(this.userSub){
      this.userSub.unsubscribe();
    };
  }
  
  //put this in ticketservice?
  formatTickets(){
    //for each ticket in tickets
      //reformat to something readable
  }
}
