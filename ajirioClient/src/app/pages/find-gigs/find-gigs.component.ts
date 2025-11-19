import { Component, OnInit } from '@angular/core';
import { GigService, Gig } from '../../services/gig.service';
import { GigCardComponent } from '../gig-card/gig-card.component';

@Component({
  selector: 'app-find-gig',
  standalone: true,
  imports: [GigCardComponent],
  templateUrl: './find-gigs.component.html',
  styleUrls: ['./find-gigs.component.css']
})
export class FindGigComponent implements OnInit {
  gigs: Gig[] = [];

  constructor(private gigService: GigService) {}

  ngOnInit() {
    this.loadGigs();
  }

  loadGigs() {
    this.gigService.getGigs().subscribe((res) => {
      this.gigs = res;
    });
  }

  deleteGig(id: string) {
    if (!confirm('Delete this gig?')) return;
    this.gigService.deleteGig(id).subscribe(() => this.loadGigs());
  }
}
