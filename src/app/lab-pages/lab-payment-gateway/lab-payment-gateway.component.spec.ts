import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPaymentGatewayComponent } from './lab-payment-gateway.component';

describe('LabPaymentGatewayComponent', () => {
  let component: LabPaymentGatewayComponent;
  let fixture: ComponentFixture<LabPaymentGatewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabPaymentGatewayComponent]
    });
    fixture = TestBed.createComponent(LabPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
