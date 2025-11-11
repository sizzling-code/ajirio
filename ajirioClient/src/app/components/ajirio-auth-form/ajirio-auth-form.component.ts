import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-ajirio-auth-form',
  imports: [],
  templateUrl: './ajirio-auth-form.component.html',
  styleUrl: './ajirio-auth-form.component.css'
})
export class AjirioAuthFormComponent {
  userRole = 'Seeker';

  imageUrl = input<string>();
  authPageTitle = input<string>();
  authPageTagLine = input<string>();
  authButtonText = input<string>();
  pageRedirectText = input<string>();
  redirectLink = input<string>();

  setRole(el: string) {
    this.userRole = el;
    console.log(this.userRole);
  }
}
