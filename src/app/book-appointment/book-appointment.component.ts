import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {
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

  tiles: Tile[] = [
    { cols: 3, rows: 1},
    { cols: 1, rows: 2},
    {cols: 3, rows: 1}
  ];

}

export interface Tile {
  cols: number;
  rows: number;
}
