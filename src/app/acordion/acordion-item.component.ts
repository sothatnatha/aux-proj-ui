import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordion-item',
  templateUrl: './acordion-item.component.html',
  styleUrls: ['./acordion-item.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'init',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('init<=>final', animate('250ms')),
    ]),
    trigger('rotateState', [
      state(
        'default',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      transition('default<=>rotated', animate('250ms'))
    ]),
  ],
})
export class AcordionItemComponent implements OnInit {
  @Input() title: string | undefined;
  showBody = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showBody = !this.showBody;
  }
}
