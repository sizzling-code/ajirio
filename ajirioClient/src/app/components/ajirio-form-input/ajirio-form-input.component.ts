import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-ajirio-form-input',
  imports: [],
  templateUrl: './ajirio-form-input.component.html',
  styleUrl: './ajirio-form-input.component.css'
})
export class AjirioFormInputComponent {
  inputLabel = input<string>();
  inputPlaceholder = input<string>();
  inputType = input<string>();
  inputId = input<string>();
}
