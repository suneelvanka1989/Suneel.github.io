import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// Framework
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// Libraries
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeExpertComponent } from './home/expert/expert.component';
import { HomeServicesComponent } from './home/services/services.component';
import { HomeBannerComponent } from './home/banner/banner.component';
import { ProfileComponent } from './doctor-profile/profile.component';
import { ProfileInfoeComponent } from './doctor-profile/info/info.component';
import { ProfileBookSlotComponent } from './doctor-profile/book-slots/book-slot.component';
import { ProfileQueriesComponent } from './doctor-profile/queries/queries.component';
import { ProfileReviewsComponent } from './doctor-profile/reviews/reviews.component';
import { ProfileGalleryComponent } from './doctor-profile/gallery/gallery.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { SearchResultService } from './services/search-result.services';
import { DoctorsComponent } from './hospital-profile/doctors/doctors.component';
import { GalleryComponent } from './hospital-profile/gallery/gallery.component';
import { HospitalProfileComponent } from './hospital-profile/hospital-profile.component';
import { InfoComponent } from './hospital-profile/info/info.component';
import { QueriesComponent } from './hospital-profile/queries/queries.component';
import { ReviewsComponent } from './hospital-profile/reviews/reviews.component';
import { LabtestSearchComponent } from './lab-pages/labtest-search/labtest-search.component';
import { LabtestSearchResultsComponent } from './lab-pages/labtest-search-results/labtest-search-results.component';
import { LabProfileComponent } from './lab-pages/lab-profile/lab-profile.component';
import { LabInfoComponent } from './lab-pages/lab-profile/lab-info/lab-info.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { LabAppointmentConfirmPageComponent } from './lab-pages/lab-appointment-confirm-page/lab-appointment-confirm-page.component';
import { HealthCheckupPackagesComponent } from './lab-pages/health-checkup-packages/health-checkup-packages.component';
import { LabPaymentGatewayComponent } from './lab-pages/lab-payment-gateway/lab-payment-gateway.component';
import { TestBookingsHistoryComponent } from './lab-pages/test-bookings-history/test-bookings-history.component';
import { OrderOverViewComponent } from './lab-pages/order-over-view/order-over-view.component';
import { LabHomeServiceComponent } from './lab-pages/lab-profile/lab-home-service/lab-home-service.component';
import { LabBookSlotComponent } from './lab-pages/lab-profile/lab-book-slot/lab-book-slot.component';
import { LabReviewsComponent } from './lab-pages/lab-profile/lab-reviews/lab-reviews.component';
import { LabQueriesComponent } from './lab-pages/lab-profile/lab-queries/lab-queries.component';
import { LabGalleryComponent } from './lab-pages/lab-profile/lab-gallery/lab-gallery.component';
import { LabPagesComponent } from './lab-pages/lab-pages.component';
import { SharedSearchComponent } from './core/components/shared-search/shared-search.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HomeExpertComponent,
    HomeServicesComponent,
    HomeBannerComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent,
    ProfileInfoeComponent,
    ProfileBookSlotComponent,
    ProfileQueriesComponent,
    ProfileReviewsComponent,
    ProfileGalleryComponent,
    BookAppointmentComponent,
    HospitalProfileComponent,
    DoctorsComponent,
    GalleryComponent,
    InfoComponent,
    QueriesComponent,
    ReviewsComponent,
    LabtestSearchComponent,
    LabtestSearchResultsComponent,
    LabProfileComponent,
    LabInfoComponent,
    LabAppointmentConfirmPageComponent,
    HealthCheckupPackagesComponent,
    LabPaymentGatewayComponent,
    TestBookingsHistoryComponent,
    OrderOverViewComponent,
    LabHomeServiceComponent,
    LabBookSlotComponent,
    LabReviewsComponent,
    LabQueriesComponent,
    LabGalleryComponent,
    LabPagesComponent,
    // TestBookingHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    CarouselModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule

  ],
  exports:[],
  providers: [SearchResultService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 
  
}
