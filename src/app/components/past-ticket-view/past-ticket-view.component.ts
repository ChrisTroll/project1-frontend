import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Ticket } from 'src/app/components/models/Ticket';
import { User } from 'src/app/components/models/User';

@Component({
  selector: 'app-past-ticket-view',
  templateUrl: './past-ticket-view.component.html',
  styleUrls: ['./past-ticket-view.component.css']
})
export class PastTicketViewComponent implements OnInit {

  ticketsub: Subscription;
  tickets: Ticket[] = [];
  user: User = {
    username: 'BananaBatman',
    password: 'batman',
    userrole: 1,
    userid: 1
  }


  constructor(private TicketServe: TicketService) { }

  ngOnInit() {
    
  }
  
  ngOnChanges(){
    console.log("Calling Changes");
    this.ticketsub = this.TicketServe.$TicketObs.subscribe(data => this.tickets = data);

  }

  ngOnDestroy(){
    if(this.ticketsub){
      this.ticketsub.unsubscribe();
    };
  }
}
