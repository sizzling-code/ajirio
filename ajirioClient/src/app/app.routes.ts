import { Routes } from '@angular/router';

import { AjirioLoginComponent } from './pages/ajirio-login/ajirio-login.component';
import { AjirioRegisterComponent } from './pages/ajirio-register/ajirio-register.component';
import { AjirioDashboardComponent } from './pages/ajirio-dashboard/ajirio-dashboard';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { FindGigComponent } from './pages/find-gigs/find-gigs.component';
import { PostGigComponent } from './pages/post-gig/post-gig.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    title: 'App login page',
    component: AjirioLoginComponent
  },
  {
    path: 'register',
    title: 'Register page',
    component: AjirioRegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  
  { path: 'dashboard', 
    title: "Dashboard",
    component: AjirioDashboardComponent },

     { path: 'chat-room', component: ChatRoomComponent },

     { path: 'find-gigs', component: FindGigComponent },
     { path: '', redirectTo: '/landing', pathMatch: 'full' },

     { path: 'post-gig', component: PostGigComponent },
     { path: '', redirectTo: '/landing', pathMatch: 'full' },

     { path: 'footer', component: FooterComponent },

     { path: 'header', component: HeaderComponent },

     { path: 'landind-page', component: LandingPageComponent },


];
