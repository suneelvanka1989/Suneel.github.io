import { AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation, } from '@angular/core';
import {
  Subject,
} from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private router: Router) {
   
  }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
  }


  navigateToResults($event: any) {
    console.log($event);
    this.router.navigate(['/search-results']);
  }


  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}

// Search Auto Complete
export interface State {
  flag: string;
  name: string;
  population: string;
}
