import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagBrandsSectionComponent } from './pag-brands-section.component';

describe('PagBrandsSectionComponent', () => {
  let component: PagBrandsSectionComponent;
  let fixture: ComponentFixture<PagBrandsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagBrandsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagBrandsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
