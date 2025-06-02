import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lab-gallery',
  templateUrl: './lab-gallery.component.html',
  styleUrls: ['./lab-gallery.component.scss']
})
export class LabGalleryComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
    autoHeight: false,
  };
  showMoreImages: boolean;
  buttonTitle = 'Explore More';
  showMore = () => {
    this.showMoreImages = !this.showMoreImages;
    this.buttonTitle = this.showMoreImages ? 'Hide More' : 'Explore More';
  };

}
