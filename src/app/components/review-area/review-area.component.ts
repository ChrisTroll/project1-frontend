import { Component, OnInit } from '@angular/core';
import { TicketUpdateRequest } from '../models/TicketUpdateRequest';

@Component({
  selector: 'app-review-area',
  templateUrl: './review-area.component.html',
  styleUrls: ['./review-area.component.css']
})
export class ReviewAreaComponent implements OnInit {

  TUR: TicketUpdateRequest = {
  ticketid: 4,
  userid: 2,
	ticketstatus: 2
  }

  constructor() { }

  ngOnInit() {
  }

}
