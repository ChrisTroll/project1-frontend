import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { TicketareaComponent } from './components/ticketarea/ticketarea.component';
import { TicketsubmitComponent } from './components/ticketsubmit/ticketsubmit.component';
import { LoginService } from './services/login.service';

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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
