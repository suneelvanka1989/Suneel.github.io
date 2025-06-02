import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-labtest-search-results',
  templateUrl: './labtest-search-results.component.html',
  styleUrls: ['./labtest-search-results.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LabtestSearchResultsComponent {
  labName: string = 'Aarthi Scans & Labs';
  labProfile: any;
bookSlot: any;

  constructor(private router: Router) { }



  imageOptions: OwlOptions = {
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
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };



navigateToLabViewProfile($event : any){
  this.router.navigate(['/lab-profile']);
}

navigateToConfirmAAppointment($event: any){
  this.router.navigate(['lab-appointment-confirm-page']);
}




}
