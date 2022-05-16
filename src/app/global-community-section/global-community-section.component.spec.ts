import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCommunitySectionComponent } from './global-community-section.component';

describe('GlobalCommunitySectionComponent', () => {
  let component: GlobalCommunitySectionComponent;
  let fixture: ComponentFixture<GlobalCommunitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCommunitySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCommunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
