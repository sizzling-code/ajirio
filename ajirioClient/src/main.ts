/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AjirioLoginComponent } from './app/pages/ajirio-login/ajirio-login.component';
import { AjirioRegisterComponent } from './app/pages/ajirio-register/ajirio-register.component';

export const routes:Routes = [
  {
    path: 'login',
    title: 'Ajirio Login',
    component: AjirioLoginComponent
  },
  {
    path: 'register',
    title: 'Ajirio Register',
    component: AjirioRegisterComponent 
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
