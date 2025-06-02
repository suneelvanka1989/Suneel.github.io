import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabGalleryComponent } from './lab-gallery.component';

describe('LabGalleryComponent', () => {
  let component: LabGalleryComponent;
  let fixture: ComponentFixture<LabGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabGalleryComponent]
    });
    fixture = TestBed.createComponent(LabGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
