import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProfileComponent } from './doctor-profile/profile.component';
import { ProfileInfoeComponent } from './doctor-profile/info/info.component';
import { ProfileBookSlotComponent } from './doctor-profile/book-slots/book-slot.component';
import { ProfileQueriesComponent } from './doctor-profile/queries/queries.component';
import { ProfileReviewsComponent } from './doctor-profile/reviews/reviews.component';
import { ProfileGalleryComponent } from './doctor-profile/gallery/gallery.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
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

import { LabAppointmentConfirmPageComponent } from './lab-pages/lab-appointment-confirm-page/lab-appointment-confirm-page.component';
import { HealthCheckupPackagesComponent } from './lab-pages/health-checkup-packages/health-checkup-packages.component';
import { LabPaymentGatewayComponent } from './lab-pages/lab-payment-gateway/lab-payment-gateway.component';
import { TestBookingsHistoryComponent } from './lab-pages/test-bookings-history/test-bookings-history.component';
import { OrderOverViewComponent } from './lab-pages/order-over-view/order-over-view.component';
import { LabPagesComponent } from './lab-pages/lab-pages.component';
import { LabHomeServiceComponent } from './lab-pages/lab-profile/lab-home-service/lab-home-service.component';
import { LabBookSlotComponent } from './lab-pages/lab-profile/lab-book-slot/lab-book-slot.component';
import { LabQueriesComponent } from './lab-pages/lab-profile/lab-queries/lab-queries.component';
import { LabReviewsComponent } from './lab-pages/lab-profile/lab-reviews/lab-reviews.component';
import { LabGalleryComponent } from './lab-pages/lab-profile/lab-gallery/lab-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'doctor/:id/profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'info',
        component: ProfileInfoeComponent,
        data: {
          title: 'Info',
        },
      },
      {
        path: 'bookslot',
        component: ProfileBookSlotComponent,
        data: {
          title: 'Book Slot',
        },
      },
      {
        path: 'queries',
        component: ProfileQueriesComponent,
        data: {
          title: 'Queries',
        },
      },
      {
        path: 'reviews',
        component: ProfileReviewsComponent,
        data: {
          title: 'Reviews',
        },
      },
      {
        path: 'gallery',
        component: ProfileGalleryComponent,
        data: {
          title: 'Gallery',
        },
      },
    ],
  },
  {
    path: 'hospital/:id/profile',
    component: HospitalProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'info',
        component: InfoComponent,
        data: {
          title: 'Info',
        },
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        data: {
          title: 'Doctors',
        },
      },
      {
        path: 'queries',
        component: QueriesComponent,
        data: {
          title: 'Queries',
        },
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Reviews',
        },
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        data: {
          title: 'Gallery',
        },
      },
    ],
  },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'labtest-search', component: LabtestSearchComponent },
  { path: 'labtest-search-results', component: LabtestSearchResultsComponent },
  {
    path: 'lab-appointment-confirm-page',
    component: LabAppointmentConfirmPageComponent,
  },
  {
    path: 'health-checkup-packages',
    component: HealthCheckupPackagesComponent,
  },
  { path: 'lab-payment-gateway', component: LabPaymentGatewayComponent },
  { path: 'test-bookings-history', component: TestBookingsHistoryComponent },
  { path: 'order-over-view', component: OrderOverViewComponent },
  {
    path: 'lab',
    component: LabPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'labtest-search',
        pathMatch: 'full',
      },
      {
        path: 'labtest-search',
        component: LabtestSearchComponent,
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'lab-profile',
    component: LabProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'lab-info',
        pathMatch: 'full',
      },
      {
        path: 'lab-info',
        component: LabInfoComponent,
        data: {
          title: 'Info',
        },
      },
      {
        path: 'lab-home-service',
        component: LabHomeServiceComponent,
        data: {
          title: 'Home Services',
        },
      },
      {
        path: 'lab-book-slot',
        component: LabBookSlotComponent,
        data: {
          title: 'Book Slots',
        },
      },
      {
        path: 'lab-queries',
        component: LabQueriesComponent,
        data: {
          title: 'Queries',
        },
      },
      {
        path: 'lab-reviews',
        component: LabReviewsComponent,
        data: {
          title: 'Reviews',
        },
      },
      {
        path: 'lab-gallery',
        component: LabGalleryComponent,
        data: {
          title: 'Gallery',
        },
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
