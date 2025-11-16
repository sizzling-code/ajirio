import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html'
})
export class GigCardComponent {
  @Input() gig: any;
}
