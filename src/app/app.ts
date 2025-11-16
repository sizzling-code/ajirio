import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { GigCardComponent } from '../app/gig-card/gig-card.component';
import { LandingPageComponent } from '../app/landing-page/landing-page';
import { FindGigsComponent } from '../app/find-gigs/find-gigs.component';
import { PostGigComponent } from '../app/post-gigs/post-gig.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from '../app/app/app.component';
import { ChatService } from './services/chat.service';
import { ApiService } from './services/api.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

