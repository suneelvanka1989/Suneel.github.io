import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'docphine-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent {
  // Public Variables
  hideInSearchPage:boolean = false;
  hideInLabtestSearchPage:boolean =  false;
  cart : any;



  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.log(event);
        if(event.url === '/search') {
          this.hideInSearchPage = true;
        }
        if(event.url ==='/labtest-search'){
          this.hideInLabtestSearchPage = true;
        }
      }
    });
  }


  navigateOrderOverViewPage($event : any){
    this.router.navigate(['/order-over-view'])
  }
}
