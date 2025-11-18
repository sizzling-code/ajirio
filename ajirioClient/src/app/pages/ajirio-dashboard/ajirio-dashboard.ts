import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-ajirio-dashboard',
  imports: [],
  templateUrl: './ajirio-dashboard.html',
  styleUrl: './ajirio-dashboard.css',
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

export class AjirioDashboardComponent {

}
