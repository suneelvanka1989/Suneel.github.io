import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-labtest-search',
  templateUrl: './labtest-search.component.html',
  styleUrls: ['./labtest-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LabtestSearchComponent {

  discountPrice = 200;
  originalPrice = 500;
  discount = 50;


  // card details

  testName = "Mri Brain with Cisternography";

  price = 200;
  results: any;
  morePackages: any;

  constructor(private router: Router) { }


  cardOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
  };


  showMoreImages: boolean;
  buttonTitle = 'Explore More';
  showMore = () => {
    this.showMoreImages = !this.showMoreImages;
    this.buttonTitle = this.showMoreImages ? 'Hide More' : 'Explore More';
  };

  navigateToSearchResults($event: any) {
    this.router.navigate(['/labtest-search-results']);
  }

  navigateToPackages($event: any) {
    this.router.navigate(['/health-checkup-packages'])
  }

}
