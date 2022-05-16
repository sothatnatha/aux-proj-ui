import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGallerySectionComponent } from './work-gallery-section.component';

describe('WorkGallerySectionComponent', () => {
  let component: WorkGallerySectionComponent;
  let fixture: ComponentFixture<WorkGallerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkGallerySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
