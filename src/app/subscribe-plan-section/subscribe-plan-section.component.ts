import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-plan-section',
  templateUrl: './subscribe-plan-section.component.html',
  styleUrls: ['./subscribe-plan-section.component.scss']
})
export class SubscribePlanSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getSubmitButton () {
    console.log('Submitted');
    alert('Email was sent!');
    
  }

}
