import { AjirioFormInputComponent } from './../ajirio-form-input/ajirio-form-input.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ajirio-auth-form',
  imports: [AjirioFormInputComponent],
  templateUrl: './ajirio-auth-form.component.html',
  styleUrl: './ajirio-auth-form.component.css'
})
export class AjirioAuthFormComponent {
  userRole = 'Seeker';

  setRole(el: string) {
    this.userRole = el;
    console.log(this.userRole);
  }
}
