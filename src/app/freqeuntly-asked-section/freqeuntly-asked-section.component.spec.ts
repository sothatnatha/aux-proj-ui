import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqeuntlyAskedSectionComponent } from './freqeuntly-asked-section.component';

describe('FreqeuntlyAskedSectionComponent', () => {
  let component: FreqeuntlyAskedSectionComponent;
  let fixture: ComponentFixture<FreqeuntlyAskedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreqeuntlyAskedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqeuntlyAskedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
