import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseusSectionComponent } from './chooseus-section.component';

describe('ChooseusSectionComponent', () => {
  let component: ChooseusSectionComponent;
  let fixture: ComponentFixture<ChooseusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseusSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
