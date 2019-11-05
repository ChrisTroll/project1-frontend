import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/components/models/User';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private isManager = false;

  user: User = {
    username: 'BananaBatman',
    password: 'batman',
    userrole: 1,
    userid: 1
  }

  constructor(private LogInServ: LoginService, private TicketServe: TicketService) { 
    
  }

  getPastTickets(){
      this.TicketServe.getPastTickets(this.user);
  }

  ngOnInit() {
    
  }

}
