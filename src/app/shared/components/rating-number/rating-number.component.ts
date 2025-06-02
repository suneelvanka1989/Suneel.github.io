import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-shared-rating-number',
  templateUrl: './rating-number.component.html',
  styleUrls: ['./rating-number.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedRatingNumberComponent implements OnDestroy {
  ngOnDestroy() {
  }
}