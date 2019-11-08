import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/components/models/Ticket';
import { User } from 'src/app/components/models/User';
import { TicketSubmitterService } from 'src/app/services/ticket-submitter/ticket-submitter.service';

@Component({
  selector: 'app-ticketsubmit',
  templateUrl: './ticketsubmit.component.html',
  styleUrls: ['./ticketsubmit.component.css']
})
export class TicketsubmitComponent implements OnInit {
  @Input()
  user: User;

  ticket: Ticket;
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
    };
  }

  getTicketStr() {
    this.ticketstr = JSON.stringify(this.ticket);
  }

  setupTicket(){
    this.ticket.author = this.user.userid;
    var date = new Date();
    this.ticket.datesubmitted = date;
  }

  submit() {
    this.setupTicket();
    this.getTicketStr;
    console.log('Submitted Ticket:' + this.ticketstr);
    this.tserv.submitTicket(this.ticket);
  }

  ngOnDrestroy(){
  }

}
