import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-payment-gateway',
  templateUrl: './lab-payment-gateway.component.html',
  styleUrls: ['./lab-payment-gateway.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabPaymentGatewayComponent {

  patientName : "rahul mishra";
  centre      : "Aarthi Scans & Labs";
  appointmentDate : "09:15 AM, 15-Nov"; 
  tests  : "CBP";


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
