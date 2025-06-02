import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

// DocPhine Modules
import { MaterialModule } from '../material/material.module';
import { SharedRatingComponent } from './components/rating/rating.component';
import { SharedRatingNumberComponent } from './components/rating-number/rating-number.component';


@NgModule({
  declarations: [
    SharedRatingComponent,
    SharedRatingNumberComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [SharedRatingComponent, SharedRatingNumberComponent],
})
export class SharedModule {}
