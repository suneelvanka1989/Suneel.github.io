// location.component.ts
import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-location-auto-complete',
  templateUrl: './location-auto-complete.component.html',
  styleUrls: ['./location-auto-complete.component.scss']
})
export class LocationAutoCompleteComponent implements OnInit {
  ngOnInit() {
    this.initializeAutocomplete();
  }

  initializeAutocomplete() {
    // var input = document.getElementById('location-input');
    // var options = {
    //   types: ['(cities)'],
    //   componentRestrictions: { country: 'IN' }, // Change to the appropriate country code
    // };
    // var autocomplete = new google.maps.places.Autocomplete(input, options);

    // google.maps.event.addListener(autocomplete, 'place_changed', () => {
    //   var place = autocomplete.getPlace();
    //   console.log('Place details:', place);
    //   // You can access location data from the 'place' object, e.g., place.name, place.geometry.location, etc.
    // });
  }
}
