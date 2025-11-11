import { Routes } from '@angular/router';
import { AjirioLoginComponent } from './pages/ajirio-login/ajirio-login.component';
import { AjirioRegisterComponent } from './pages/ajirio-register/ajirio-register.component';

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
  }
];
