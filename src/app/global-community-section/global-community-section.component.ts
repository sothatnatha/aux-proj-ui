import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-community-section',
  templateUrl: './global-community-section.component.html',
  styleUrls: ['./global-community-section.component.scss']
})
export class GlobalCommunitySectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getLearnMoreButton () {
    alert('Please learn more in Google 🌚');
  }
}
