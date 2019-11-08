import { Component, OnInit, Input } from '@angular/core';
import { TicketUpdateRequest } from '../models/TicketUpdateRequest';
import { User } from '../models/User';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Subscription } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-review-area',
  templateUrl: './review-area.component.html',
  styleUrls: ['./review-area.component.css']
})
export class ReviewAreaComponent implements OnInit {
  @Input()
  user: User;

  hasSubmitted = false;

  tur: TicketUpdateRequest;
  blankTur: TicketUpdateRequest = {
    ticketid: 0,
    userid: 0,
    ticketstatus: 0
  };

  ticketsub: Subscription;
  tickets: Ticket[] = [];

  constructor(private tServ: TicketService) { }

  ngOnInit() {
    this.ticketsub = this.tServ.$TicketsObs.subscribe(data => {
      this.tickets = data;
    })
  }

  update(idIn: number, isApproved: boolean){
    this.tur = this.blankTur;
    this.tur.ticketid = idIn;
    this.tur.userid = this.user.userid;
    if (isApproved){
      this.tur.ticketstatus = 2;
    } else {
      this.tur.ticketstatus = 3;
    }
    console.log("TUR: " + this.tur);
    this.tServ.UpdateTicket(this.tur);
    this.hasSubmitted = true;
  }

  refresh(){
    this.tServ.getReviewable(this.user);
  }

  ngOnDestroy(){
    this.ticketsub.unsubscribe();
  }
}
