import { Component, OnInit } from '@angular/core';
import { TicketSubmitterService } from 'src/app/services/ticket-submitter/ticket-submitter.service';

@Component({
  selector: 'app-ticketsubmit',
  templateUrl: './ticketsubmit.component.html',
  styleUrls: ['./ticketsubmit.component.css']
})
export class TicketsubmitComponent implements OnInit {

  let ticket = {""}

  constructor() { }

  ngOnInit() {
  }

}
