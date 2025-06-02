import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBannerComponent implements OnInit, AfterViewInit, OnDestroy {
  // customOptions: OwlOptions = {
  //   loop: true,
  //   autoplay: true,
  //   items: 1,
  //   nav: false,
  //   autoplayHoverPause: true,
  //   animateOut: 'slideOutUp',
  //   animateIn: 'slideInUp',
  //   dots: false
  // };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 7000000,
    autoplay: false,
    autoplayTimeout: 8000000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false
      },
    },
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  /**
   * Sets the initial value after the filteredCities are loaded initially
   */
  ngOnDestroy() {}
}
