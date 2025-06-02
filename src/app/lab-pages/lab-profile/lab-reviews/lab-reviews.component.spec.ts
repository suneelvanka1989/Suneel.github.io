import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReviewsComponent } from './lab-reviews.component';

describe('LabReviewsComponent', () => {
  let component: LabReviewsComponent;
  let fixture: ComponentFixture<LabReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabReviewsComponent]
    });
    fixture = TestBed.createComponent(LabReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
