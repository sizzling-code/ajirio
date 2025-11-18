import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gig-card',
  templateUrl: './gig-card.component.html',
  styleUrls: ['./gig-card.component.css']
})
export class GigCardComponent {
  @Input() title!: string;
  @Input() company!: string;
  @Input() location!: string;
  @Input() payRate!: string;
  @Input() skillMatch?: number;
  @Input() urgent?: boolean;
  @Input() remote?: boolean;
  @Input() duration?: string;
}
