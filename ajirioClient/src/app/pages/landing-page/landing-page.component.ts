import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl:'./landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
 
})
export class LandingPageComponent implements OnInit {

  featuredGigs = [
    { title: 'Graphic Designer', employer: 'CreativeCo', pay: '$30/hr', location: 'Remote' },
    { title: 'Social Media Manager', employer: 'BrandBuzz', pay: '$25/hr', location: 'Nairobi' },
    { title: 'Web Developer (Junior)', employer: 'TechWave', pay: '$20/hr', location: 'Hybrid' },
  ];
  trustedByLogos = [
    'assets/logos/company1.png',
    'assets/logos/company2.png',
    'assets/logos/company3.png',
    'assets/logos/company4.png'
  ];

  testimonials = [
    { name: 'Alice Mwangi', role: 'Youth Gig Seeker', quote: 'I got matched with a great gig within days!', photo: 'assets/testimonials/alice.jpg' },
    { name: 'James Otieno', role: 'Employer', quote: 'Found talented youth quickly — highly recommend!', photo: 'assets/testimonials/james.jpg' },
    { name: 'Zara Ahmed', role: 'Freelancer', quote: 'Flexible gigs helped me build real-experience and portfolio.', photo: 'assets/testimonials/zara.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

