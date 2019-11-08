import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Ticket } from 'src/app/components/models/Ticket';
import { User } from 'src/app/components/models/User';
import { LoginService } from 'src/app/services/login/login.service';
import { PrettyTicket } from '../models/PrettyTicket';

@Component({
  selector: 'app-past-ticket-view',
  templateUrl: './past-ticket-view.component.html',
  styleUrls: ['./past-ticket-view.component.css']
})
export class PastTicketViewComponent implements OnInit {

  ticketsub: Subscription;
  tickets: Ticket[] = [];
  prettyTickets: PrettyTicket[] = [];
  prettyTicket: PrettyTicket;
  userSub: Subscription;
  user: User;

  constructor(private ticketServ: TicketService, private loginServ: LoginService) { }

  ngOnInit() {
    this.ticketsub = this.ticketServ.$TicketsObs.subscribe(data => {
      this.tickets = data;
      this.formatTickets();
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

  formatTickets(){
    for(let ticket of this.tickets){
      this.resetprettyTicket();
      this.mapTicket(ticket);
      if(ticket.status === 2){
        this.prettyTicket.status = "Approved";
      } else {
        this.prettyTicket.status = "Denied";
      }
      if(ticket.type === 1){
        this.prettyTicket.type = "Lodging";
      } else if(ticket.type === 2){
        this.prettyTicket.type = "Travel";
      } else if(ticket.type === 3){
        this.prettyTicket.type = "Food";
      } else {
        this.prettyTicket.type = "Other";
      }
      this.prettyTickets.push(this.prettyTicket);
    }
  }
  resetprettyTicket() {
    this.prettyTicket = {
      id: null,
      amount: null,
      datesubmitted: null,
      dateresolved: null,
      description: null,
      imgaddr: null,
      resolver: null,
      status: null,
      type: null
    }
  }

  mapTicket(ticketin: Ticket){
    this.prettyTicket.id = ticketin.id;
    this.prettyTicket.amount = ticketin.amount;
    this.prettyTicket.datesubmitted = new Date(ticketin.datesubmitted);
    this.prettyTicket.dateresolved = new Date(ticketin.dateresolved);
    this.prettyTicket.description = ticketin.description;
    this.prettyTicket.resolver = ticketin.resolver;
  }
}
