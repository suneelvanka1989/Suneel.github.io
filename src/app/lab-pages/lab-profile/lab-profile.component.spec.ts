import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabProfileComponent } from './lab-profile.component';

describe('LabProfileComponent', () => {
  let component: LabProfileComponent;
  let fixture: ComponentFixture<LabProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabProfileComponent]
    });
    fixture = TestBed.createComponent(LabProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
