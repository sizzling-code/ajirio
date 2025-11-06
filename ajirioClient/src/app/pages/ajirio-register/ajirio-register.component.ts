import { Component } from '@angular/core';

@Component({
  selector: 'app-ajirio-register',
  imports: [],
  templateUrl: './ajirio-register.component.html',
  styleUrl: './ajirio-register.component.css'
})
export class AjirioRegisterComponent {
  statesToBeToggled = ['Sign In', 'Sign Up']
  activeState = 'Sign In';

  setState(){
    
  }
}
