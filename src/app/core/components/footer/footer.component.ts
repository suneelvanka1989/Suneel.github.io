import { Component, ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'docphine-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  showFooter:boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.log(event);
        if(event.url === '/') {
          this.showFooter = true;
        } else {
          this.showFooter = false;
        }
      }
    });
  }
  faCoffee = faCoffee;
}
