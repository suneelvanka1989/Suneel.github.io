import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

// DocPhine Modules
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { LocationAutoCompleteComponent } from './components/auto-complete/location-auto-complete.component';
import { LocationService } from './services/location.service';
import { compositeSearchService } from './services/composite-search.service';

export function initializeApp(locationService: LocationService) {
  return () => locationService.initializeApp();
}

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SharedSearchComponent,
    LocationAutoCompleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SharedSearchComponent
  ],
  providers: [
    LocationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [LocationService],
    },
    compositeSearchService
  ]
})



export class CoreModule { }
