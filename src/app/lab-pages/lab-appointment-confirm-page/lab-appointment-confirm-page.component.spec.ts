import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAppointmentConfirmPageComponent } from './lab-appointment-confirm-page.component';

describe('LabAppointmentConfirmPageComponent', () => {
  let component: LabAppointmentConfirmPageComponent;
  let fixture: ComponentFixture<LabAppointmentConfirmPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabAppointmentConfirmPageComponent]
    });
    fixture = TestBed.createComponent(LabAppointmentConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
