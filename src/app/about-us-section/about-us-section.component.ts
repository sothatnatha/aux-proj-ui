import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
})
export class AboutUsSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef;

  scrollLeftMax: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollLeftMax = this.scrollableContainer.nativeElement.scrollLeftMax;
    console.log(this.scrollLeftMax);
  }

  onScroll(){
    console.log(this.scrollableContainer.nativeElement.scrollLeft);
  }

  onBackward() {
    const xValue =
      this.scrollableContainer?.nativeElement?.scrollLeft -
      this.scrollableContainer?.nativeElement?.offsetWidth;

    this.scrollableContainer.nativeElement.scrollTo({
      left: xValue,
      behavior: 'smooth',
    });
  }
  onForward() {
    const xValue =
      this.scrollableContainer?.nativeElement?.scrollLeft +
      this.scrollableContainer?.nativeElement?.offsetWidth;

    this.scrollableContainer.nativeElement.scrollTo({
      left: xValue,
      behavior: 'smooth',
    });
  }
}
