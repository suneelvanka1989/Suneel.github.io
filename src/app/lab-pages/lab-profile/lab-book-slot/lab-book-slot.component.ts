import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, Subscribable } from 'rxjs';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';

export interface Gender {
  name: string;
}

@Component({
  selector: 'app-lab-book-slot',
  templateUrl: './lab-book-slot.component.html',
  styleUrls: ['./lab-book-slot.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LabBookSlotComponent {
  filteredPlaces: Observable<undefined> | Subscribable<undefined> | Promise<undefined>;
  reviewAppointment: any;
  addPatient=false;
  editPatientDetails= false;
  otherClinics = false;
moreClinics: any;


  add($event: MatChipInputEvent) {
    throw new Error('Method not implemented.');
  }
  placeCtrl: FormControl<any>;
  separatorKeysCodes: readonly number[] | ReadonlySet<number>;
  remove(_t11: any) {
    throw new Error('Method not implemented.');
  }
  selectedPlaces: any;

  slots = [1, 2, 3, 4, 5];
  availabilitySlotIndex: number = -1;

  constructor(private router: Router) { }

  selected: Date | null;

  availability = [
    {
      period: 'Monring',
      slots: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30']
    },
    {
      period: 'Afternoon',
      slots: ['12:00']
    },

  ]

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


  showCarousel = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    
  };


  



}
