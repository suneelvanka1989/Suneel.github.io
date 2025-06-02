import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-health-checkup-packages',
  templateUrl: './health-checkup-packages.component.html',
  styleUrls: ['./health-checkup-packages.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HealthCheckupPackagesComponent {

  discountPrice = 200;
  originalPrice = 500;
  discountPercentage = 50;

  discount = 50;
  gender : any;
  


  grid: any[][];

  constructor() {
    this.grid = this.generateGrid(5, 5);
  }

  private generateGrid(rows: number, cols: number): any[][] {
    const grid = [];
    let count = 1;

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(count++);
      }
      grid.push(row);
    }

    return grid;
  }


  
  
}
