import { Component } from '@angular/core';
import { AjirioFormInputComponent } from '../../components/ajirio-form-input/ajirio-form-input.component';
import { AjirioAuthFormComponent } from '../../components/ajirio-auth-form/ajirio-auth-form.component';

@Component({
  selector: 'app-ajirio-register',
  imports: [AjirioFormInputComponent, AjirioAuthFormComponent],
  templateUrl: './ajirio-register.component.html',
  styleUrl: './ajirio-register.component.css'
})
export class AjirioRegisterComponent {
  userRole = 'Seeker';

  setRole(el:string){
    this.userRole = el;
    console.log(this.userRole);
  }  
}
