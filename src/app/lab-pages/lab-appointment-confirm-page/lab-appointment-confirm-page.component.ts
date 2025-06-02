import {
  Component, ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lab-appointment-confirm-page',
  templateUrl: './lab-appointment-confirm-page.component.html',
  styleUrls: ['./lab-appointment-confirm-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LabAppointmentConfirmPageComponent {
paymentGateway: any;


  constructor(private router: Router) { }

  labTitle: string = "Aarthi Scans & Labs";
  labSubTitle: string = "Multi-specialty Clinic";

  patientName: string = "Vidyesha Pandey";

  addMoreTests = false;
  addPatient = false;
  editPatientDetails = false;
  selected: any;
  option1 = false;
  otherClinics = false;


  navigateToPackages($event: any) {
    this.router.navigate(['/lab-payment-gateway'])
  }


  addPatientFields() {
    this.addPatient = true;
  }

  editPatientFields() {
    this.editPatientDetails = true;
  }

  openPatientFields() {
    this.addMoreTests = true;
    //this.addPatient= true;
  }
  showMoreClinics(){
    this.otherClinics= true;
  }

  closeTab() {
    this.addMoreTests = false;
    this.addPatient = false;
    this.editPatientDetails = false;
    this.otherClinics = false;
  }




}
