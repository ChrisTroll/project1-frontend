import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { TicketareaComponent } from './components/ticketarea/ticketarea.component';
import { TicketsubmitComponent } from './components/ticketsubmit/ticketsubmit.component';
import { LoginService } from './services/login/login.service';
import { TicketSubmitterService } from './services/ticket-submitter/ticket-submitter.service';
import { TicketService } from './services/ticket/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    TicketareaComponent,
    TicketsubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, TicketSubmitterService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
