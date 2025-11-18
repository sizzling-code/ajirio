import { Component } from '@angular/core';
import { GigService, Gig } from '../../services/gig.service';

@Component({
  selector: 'app-post-gig',
  templateUrl: './post-gig.component.html',
  styleUrls: ['./post-gig.component.css']
})
export class PostGigComponent {
  gig: Gig = {
    title: '',
    description: '',
    pay: ''
  };

  constructor(private gigService: GigService) {}

  submitGig() {
    this.gigService.createGig(this.gig).subscribe({
      next: (res) => {
        alert('Gig posted successfully!');
        this.gig = { title: '', description: '', pay: '' };
      },
      error: (err) => alert('Error posting gig: ' + err.message),
    });
  }
}
