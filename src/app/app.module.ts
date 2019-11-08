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
import { ReviewAreaComponent } from './components/review-area/review-area.component';
import { PastTicketViewComponent } from './components/past-ticket-view/past-ticket-view.component';
import { ViewService } from './services/view/view.service';
import { ReimbPipe } from './components/pipes/reimb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    TicketareaComponent,
    TicketsubmitComponent,
    ReviewAreaComponent,
    PastTicketViewComponent,
    ReimbPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, TicketSubmitterService, TicketService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
