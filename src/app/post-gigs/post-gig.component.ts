import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-post-gig',
  templateUrl: './post-gig.component.html',
  imports: [FormsModule],
  styleUrls: ['./post-gig.component.css']
})
export class PostGigComponent {
  gig = {
    title: '',
    description: '',
    category: '',
    skills: '',
    pay: '',
    location: '',
    duration: ''
  };
  submitGig() {
    console.log('Gig posted successfully!', this.gig);
    alert(`Gig "${this.gig.title}" has been posted!`);
  }
}
