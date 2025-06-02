import { Injectable } from '@angular/core';
import stateWideCities from '../../../assets/data/states_cities_in.json';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coordinates, Place } from '../models/location.model';
declare let google: any;
let scope:any;
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  location: string;
  userCity = new Subject<Place>();
  localities = new Subject<any>();
  coordinates:Coordinates;
  selectedCity = new Subject<Place>();
  cities = new Subject<any>();

  constructor(private http: HttpClient) {
    scope = this;
  }

  initializeApp() {
    // Add your initialization logic here
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.onSuccess.bind(this),
        this.onError
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }

  onSuccess(position: any) {
    this.coordinates = { lat: position.coords.latitude, lng: position.coords.longitude }
    this.getCityFromCoordinates(this.coordinates.lat, this.coordinates.lng);
  }

  onError(error: any) {
    console.error('Error getting geolocation:', error);
  }

  getCityFromCoordinates(latitude: number, longitude: number, isReturn?:boolean) {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAM5WLNo3H-l-P05ybloC7E87iWtxA9dN0`;
    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        const addressComponents = data.results[0].address_components;
        const city = addressComponents.find((component: any) =>
          component.types.includes('locality')
        );
        if (city) {
          let userCity:Place = {
            name: city.long_name,
            coordinates: {
              lat: data.results[0].geometry.location.lat,
              lng: data.results[0].geometry.location.lng
            },
            address: '',
            type: 'city',
            placeId: data.results[0].place_id
          };
          if(isReturn) {
            this.selectedCity.next(userCity);
          } else  {
            this.userCity.next(userCity);
          }
        }
      })
      .catch((error) => {
        let userCity:Place = {
          name: '',
          coordinates: {
            lat: -1,
            lng: -1
          },
          address: '',
          type: 'city'
        };
        console.error('Error getting city from coordinates:', error);
        if(isReturn) {
          this.selectedCity.next(userCity);
        } else  {
          this.userCity.next(userCity);
        }
      });
  }


  public getPlacesWithinCity(city: Place, searchText?: any):any {
    let request = {
      query: '',
      fields: ['name', 'geometry'],
    };
    if (city) {
      request = {
        query: searchText
          ? `${searchText} Localities in ${city.name}`
          : `Localities in  ${city.name}`, // Search for places within the city
        fields: ['name', 'geometry'],
      };
    } else {
      request = {
        query: searchText ? `${searchText} Localities in India` : `Localities in India`,
        fields: ['name', 'geometry'],
      };
    }
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.textSearch(request, function (results: any, status: any) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        scope.localities.next(results);
      } else {
        scope.localities.next(results);
      }
    });
  }


  public getLocalitiesInCountry(searchText?: any):any {
    let request = {
      query: searchText ? `${searchText} Localities in India` : `Localities in India`,
      types: [],
      fields: ['name', 'geometry'],
    };
    let service = new google.maps.places.PlacesService(
      document.createElement('div')
    );
    service.textSearch(request, function (results: any, status: any) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        scope.localities.next(results);
      } else {
        // Todo - Handle Error
        scope.localities.next(results);
      }
    });
  }

  public getCitiesInCountry(searchText?: string):any {
    let request = {
      query: 'cities in India',
      types: ['(cities)'],
    };
    if(searchText) {
      request.query = `${searchText} cities in India`
    }
    
    let service = new google.maps.places.PlacesService(
      document.createElement('div')
    );
    service.textSearch(request, function (results: any, status: any) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        scope.cities.next(results);
      } else {
        // Todo - Handle Error
        scope.cities.next(results);
      }
    });
  }
}
