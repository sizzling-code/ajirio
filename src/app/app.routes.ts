import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page';
import { FindGigsComponent } from '../app/find-gigs/find-gigs.component';
import { PostGigComponent } from '../app/post-gigs/post-gig.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'find-gigs', component: FindGigsComponent },
  { path: 'post-gig', component: PostGigComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'chat/:_id', component: ChatRoomComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





