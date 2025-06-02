import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-order-over-view',
  templateUrl: './order-over-view.component.html',
  styleUrls: ['./order-over-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderOverViewComponent {

reviewAppointment: any;
addMoreTests = false;
  addPatient=false;
  editPatientDetails= false;
  otherClinics = false;

  constructor(private router: Router) { }

slots = [1,2,3,4,5];
  availabilitySlotIndex:number = -1;

  selected: Date | null;

  availability = [
    {
      period: 'Monring',
      slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '12:00']
    },
    {
      period: 'Afternoon',
      slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '12:00']
    },
    {
      period: 'Evening',
      slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '12:00']
    }
  ]

  tiles: any[] = [
    { cols: 3, rows: 1},
    { cols: 1, rows: 2},
    {cols: 3, rows: 1}
  ];

  public showAvailability(index:number) {
    if(this.availabilitySlotIndex != index) {
      this.availabilitySlotIndex = index;
    } else {
      this.availabilitySlotIndex = -1;
    }
  }


  navigateReviewAppointment($event: any) {
    this.router.navigate(['/lab-payment-gateway'])
  }


  addPatientFields() {
    this.addPatient = true;
  }

  editPatientFields() {
    this.editPatientDetails = true;
  }

  showMoreClinics(){
    this.otherClinics= true;
  }


  closeTab() {
    
    this.addPatient = false;
    this.editPatientDetails = false;
    this.otherClinics = false;
  }

  show :boolean = true;
filteredPlaces: Observable<undefined>|Subscribable<undefined>|Promise<undefined>;
select($event: MatAutocompleteSelectedEvent) {
throw new Error('Method not implemented.');
}
add($event: MatChipInputEvent) {
throw new Error('Method not implemented.');
}
placeCtrl: FormControl<any>;
separatorKeysCodes: readonly number[]|ReadonlySet<number>;
remove(_t11: any) {
throw new Error('Method not implemented.');
}
selectedPlaces: any;





}
