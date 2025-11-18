import { Component } from '@angular/core';
import { AjirioAuthFormComponent } from '../../components/ajirio-auth-form/ajirio-auth-form.component';
import { AjirioFormInputComponent } from '../../components/ajirio-form-input/ajirio-form-input.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajirio-login',
  imports: [AjirioAuthFormComponent, AjirioFormInputComponent],
  templateUrl: './ajirio-login.component.html',
  styleUrl: './ajirio-login.component.css'
})

export class AjirioLoginComponent {
  
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }

}
