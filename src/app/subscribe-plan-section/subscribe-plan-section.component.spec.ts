import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanSectionComponent } from './subscribe-plan-section.component';

describe('SubscribePlanSectionComponent', () => {
  let component: SubscribePlanSectionComponent;
  let fixture: ComponentFixture<SubscribePlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
