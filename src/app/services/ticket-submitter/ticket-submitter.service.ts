import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/components/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketSubmitterService {

  constructor(private httpClient: HttpClient) { }

  submitTicket(ticketin: Ticket){
    const url = 'http://localhost:8080/Project1/ticket/';
    this.httpClient.post(url, ticketin).subscribe((data: Ticket) => {

      //testing output
      console.log('Stored ticket:' + JSON.stringify(data));
    });
  }
}
