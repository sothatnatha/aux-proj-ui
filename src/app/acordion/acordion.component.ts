import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordion',
  template: `
    <div style="padding: 100px 30px;">
      <div class="acordinTextContainer">
        <div class="acordinTextWrapper">
          <div class="acordinTextContent">
            <h1>Frequently Asked?</h1>
          </div>
        </div>
      </div>
      <ng-content select="app-acordion-item"></ng-content>
    </div>
  `,
  styleUrls: ['./acordion.component.scss'],
})
export class AcordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
