import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-find-gigs',
  templateUrl: './find-gigs.component.html',
  styleUrls: ['./find-gigs.component.css']
})
export class FindGigsComponent implements OnInit {
  gigs = [
    { title: 'Web Developer Intern', company: 'TechWave', location: 'Nairobi', pay: '$20/hr', skills: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Graphic Designer', company: 'CreativeCo', location: 'Remote', pay: '$25/hr', skills: ['Figma', 'Canva', 'Photoshop'] },
    { title: 'Sales Assistant', company: 'MarketLink', location: 'Mombasa', pay: '$15/hr', skills: ['Communication', 'Customer Service'] },
  ];

  constructor() {}
  ngOnInit(): void {}
}
