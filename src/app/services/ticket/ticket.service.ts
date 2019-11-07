import { Injectable } from '@angular/core';
import { User } from 'src/app/components/models/User';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/components/models/Ticket';
import {TicketUpdateRequest} from 'src/app/components/models/TicketUpdateRequest';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  private Tickets: Subject<Ticket[]> = new Subject();
  public $TicketsObs: Observable<Ticket[]> = this.Tickets.asObservable();

  getPastTickets(userin: User){
    const url = 'http://localhost:8080/Project1/pastview/';
    this.httpClient.post(url, userin).subscribe((data: Ticket[]) => {
      this.Tickets.next(data);
      //testing output
      console.log('Ticket List:' + JSON.stringify(data));
    });

  }
  getReviewable(userin: User){
    const url = 'http://localhost:8080/Project1/review/';
    this.httpClient.post(url, userin).subscribe((data: Ticket[]) => {
      this.Tickets.next(data);
      //testing output
      console.log('Ticket List:' + JSON.stringify(data)); 
    });
  }
  UpdateTicket(TUR: TicketUpdateRequest){
    const url = 'http://localhost:8080/Project1/update/';
    this.httpClient.post(url, TUR).subscribe((data: Ticket) => {

      //testing output
      console.log('Ticket List:' + JSON.stringify(data)); 
    });
}
}
