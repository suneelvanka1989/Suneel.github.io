import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileBookSlotComponent {
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
}
