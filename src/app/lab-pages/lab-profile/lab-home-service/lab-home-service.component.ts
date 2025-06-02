import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-lab-home-service',
  templateUrl: './lab-home-service.component.html',
  styleUrls: ['./lab-home-service.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LabHomeServiceComponent {

  show :boolean = true;
filteredPlaces: Observable<undefined>|Subscribable<undefined>|Promise<undefined>;
selected($event: MatAutocompleteSelectedEvent) {
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



editPatientDetails = false;

editPatientFields() {
  this.editPatientDetails = true;
}

closeTab() {
  this.editPatientDetails = false;
}

}
