import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeExpertComponent implements OnInit, AfterViewInit, OnDestroy {

  showCarousel = false;
  customOptions: OwlOptions = {
    items:2,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false
  };
  
  constructor(private router: Router) {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth <= 768) {
      this.customOptions = {
        items:2,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: [],
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: false
      };
    }
  }

  navigateToSearch($event: any) {
    this.router.navigate(['/search']);
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {}
}
