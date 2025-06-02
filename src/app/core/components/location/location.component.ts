// location.component.ts
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  userCity: string;

  constructor() {

  }

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  onSuccess(position: any) {
    // Position
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Call the fu nction to get the city based on coordinates
    this.getCityFromCoordinates(latitude, longitude);
  }

  onError(error: any) {
    console.error('Error getting geolocation:', error);
  }

  getCityFromCoordinates(latitude: number, longitude: number) {
    // Replace this with an actual API call to a reverse geocoding service
    // For example, with the Google Maps Geocoding API
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`; 

    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        const addressComponents = data.results[0].address_components;
        const city = addressComponents.find((component: any) =>
          component.types.includes('locality')
        );
        if (city) {
          this.userCity = city.long_name;
        }
      })
      .catch((error) => {
        console.error('Error getting city from coordinates:', error);
      });
  }
}
