import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/components/models/Ticket';
import { User } from 'src/app/components/models/User';
import { TicketSubmitterService } from 'src/app/services/ticket-submitter/ticket-submitter.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticketsubmit',
  templateUrl: './ticketsubmit.component.html',
  styleUrls: ['./ticketsubmit.component.css']
})
export class TicketsubmitComponent implements OnInit {

  ticket: Ticket;
  user: User = {
    username: 'BananaBatman',
    password: 'batman',
    userrole: 1,
    userid: 1
  }

  ticketstr: string;

  constructor(private tserv: TicketSubmitterService) { }

  ngOnInit() {
    this.ticket = {
      id: null,
      amount: null,
      datesubmitted: null,
      dateresolved: null,
      description: null,
      imgaddr: null,
      author: null,
      resolver: null,
      status: 1,
      type: null
    }
  }

  getTicketStr() {
    this.ticketstr = JSON.stringify(this.ticket);
  }

  setupTicket(){
    this.ticket.author = this.user.userid;
  }

  submit() {
    this.setupTicket();
    this.getTicketStr;
    console.log('Ticket :' + this.ticketstr);
    this.tserv.submitTicket(this.ticket);
  }

}
