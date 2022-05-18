import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
})
export class AboutUsSectionComponent implements OnInit {
  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef;

  private a = null;
  public b = null;

  constructor() {}

  ngOnInit(): void {}

  scrollEve(e: any) {
    // console.log(e.target);
  }
  onBackward() {
    
    const xvalue = this.scrollableContainer?.nativeElement?.scrollLeft - this.scrollableContainer?.nativeElement?.offsetWidth;

    this.scrollableContainer.nativeElement.scrollTo({
      left: xvalue,
      behavior: 'smooth',
    });
  }
  onForward() {
    const xvalue = this.scrollableContainer?.nativeElement?.scrollLeft + this.scrollableContainer?.nativeElement?.offsetWidth;

    this.scrollableContainer.nativeElement.scrollTo({
      left: xvalue,
      behavior: 'smooth',
    });
  }
}
