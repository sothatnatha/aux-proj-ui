import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss'],
})
export class IntroductionSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getViewPlanButton() {
    alert('Our page is under maintenance!');
  }

  getStartPlanButton() {
    alert('Our page is under maintenance!');
  }
}
