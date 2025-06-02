import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent {
  // Public Variables
  profileTabs: any[];
  activeLinkIndex = -1;



  @ViewChild('matTabGroup', { static: false }) matTabGroup: MatTabGroup;

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false
  };
  constructor(private router: Router) {
    this.profileTabs = [
      {
        label: 'Info',
        link: 'info',
        index: 0,
        icon: 'fas fa-user-md',
      },
      {
        label: 'book Slot',
        link: 'bookslot',
        index: 1,
        icon: 'fa-solid fa-calendar-days',
      },
      {
        label: 'Queries',
        link: 'queries',
        index: 2,
        icon: 'fa-solid fa-clipboard-question',
      },
      {
        label: 'Reviews',
        link: 'reviews',
        index: 3,
        icon: 'fa-solid fa-star',
      },
      {
        label: 'Gallery',
        link: 'gallery',
        index: 4,
        icon: 'fa-solid fa-image',
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.profileTabs.indexOf(
        this.profileTabs.find((tab) => tab.link === '.' + this.router.url)
      );
      this.matTabGroup.selectedIndex = this.activeLinkIndex;
    });

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.profileTabs.indexOf(
        this.profileTabs.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }

  ngAfterViewInit() {
  }

  profileTabClick = (event: MatTabChangeEvent) => {
    this.matTabGroup.selectedIndex = event.index;
    const pathHash = this.router.url.split('/');
    pathHash[pathHash.length - 1] = this.profileTabs[event.index].link;
    this.router.navigate([pathHash.join('/')]);
  };
}
