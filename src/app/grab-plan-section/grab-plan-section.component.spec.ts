import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabPlanSectionComponent } from './grab-plan-section.component';

describe('GrabPlanSectionComponent', () => {
  let component: GrabPlanSectionComponent;
  let fixture: ComponentFixture<GrabPlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabPlanSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabPlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
