import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view/view.service';

@Component({
  selector: 'app-ticketarea',
  templateUrl: './ticketarea.component.html',
  styleUrls: ['./ticketarea.component.css']
})
export class TicketareaComponent implements OnInit {

  private view = 0;
  private viewSub: Subscription;

  constructor(private viewServ: ViewService) { }

  ngOnInit() {
    this.viewSub = this.viewServ.$view.subscribe(data => {
      this.view = data
    })
  }

}
