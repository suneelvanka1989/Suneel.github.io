import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-shared-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedRatingComponent implements OnDestroy {
  ngOnDestroy() {
  }
}

// https://codepen.io/andreacrawford/pen/NvqJXW
// Search Auto Complete
export interface Rating {
  flag: string;
  name: string;
  population: string;
}
