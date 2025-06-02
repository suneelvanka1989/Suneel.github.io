import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Observable,
  ReplaySubject,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  startWith,
  take,
  takeUntil,
} from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { NavigationEnd, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { compositeSearchService } from '../../services/composite-search.service';

import { COMMA, ENTER, P } from '@angular/cdk/keycodes';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  Place,
  Value,
  searchDropdownOptions,
} from '../../models/location.model';

@Component({
  selector: 'app-shared-search',
  templateUrl: './shared-search.component.html',
  styleUrls: ['./shared-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedSearchComponent implements OnInit, OnDestroy {
  protected _onDestroy = new Subject<void>();
  public showDesktopSearch: boolean = false;

  /* Place */
  // public cityCtrl: FormControl<City> = new FormControl<City>(null);
  private selectedCity: Place;
  private initializePlacesSearch: boolean = true;
  private isCities: boolean = true;
  public cityCtrl: FormControl<string> = new FormControl<any>(null);
  public cityFilterCtrl: FormControl<string> = new FormControl<any>('');
  public filteredCities: ReplaySubject<Place[]> = new ReplaySubject<Place[]>(1);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  placeCtrl = new FormControl();
  filteredPlaces: Observable<Place[]>;
  selectedPlaces: Place[] = [];
  places: Place[] = [];
  isRealPlaceChange: boolean = true;
  pageName: string = '';
  isMobileView: boolean = true;

  // Main Search
  public searchOptions: searchDropdownOptions[] = [];
  searchOptionCtrl = new FormControl('');
  filteredSearchOptions: Observable<searchDropdownOptions[]>;
  filteredOptions: Observable<string[]>;
  public labelName: string = 'Search Expert';
  @ViewChild('placeInput') placeInput: ElementRef<HTMLInputElement>;
  @ViewChild('locationAutocompleteInput')
  locationAutocompleteInput: ElementRef<HTMLInputElement>;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth <= 599) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  constructor(
    private router: Router,
    private locationService: LocationService,
    private compositeSearchService: compositeSearchService
  ) {
    // Mobile and Desktop search Toggle
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/' || event.url === '/search' || event.url === '/labtest-search') {
          this.showDesktopSearch = false;
        } else {
          this.showDesktopSearch = true;
        }
        if (event.url === '' || event.url === '/' || event.url === 'home') {
          this.pageName = 'home';
        } else if (event.url === '/search') {
          this.pageName = 'search';
        }else if (event.url === '/labtest-search') {
          this.pageName = 'labtest-search';
        } else {
          this.pageName = 'other';
        }
      });

    // User Places Initialization
    this.locationService.userCity
      .pipe(takeUntil(this._onDestroy))
      .subscribe((place) => {
        let cityObject: Place = place;
        if (this.initializePlacesSearch) {
          this.selectedPlaces = [cityObject];
          if (place) {
            this.locationService.getPlacesWithinCity(place);
          } else {
            this.locationService.getLocalitiesInCountry();
          }
        }
        this.selectedCity = place;
        this.isCities = true;
      });

    this.locationService.selectedCity
      .pipe(takeUntil(this._onDestroy))
      .subscribe((place) => {
        this.selectedCity = place;
        this.locationService.getPlacesWithinCity(place);
      });

    // User Places Search
    this.placeCtrl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchText) => {
        this.isCities = false;
        if (this.isRealPlaceChange) {
          if (this.selectedCity.name) {
            this.locationService.getPlacesWithinCity(
              this.selectedCity,
              searchText
            );
          } else {
            this.locationService.getLocalitiesInCountry(searchText);
          }
        }
        this.isRealPlaceChange = true;
      });

    // Doctors or Hospital Search
    this.searchOptionCtrl.valueChanges.pipe().subscribe((state) => {
      if (state && state.length > 2) {
        this.getSearchOptionsData(state);
      }
      // return state ? this._filterStates(state) : this.searchOptions.slice()
    });
  }

  ngOnInit() {

    if(window.innerWidth <= 599) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
    
    // localities in a country subscription
    this.locationService.localities
      .pipe(takeUntil(this._onDestroy))
      .subscribe((places) => {
        if (places && places.length > 0) {
          this.isCities = false;
          this.processPlaceData(places);
        }
      });

    // Cities in a country subscription
    this.locationService.cities
      .pipe(takeUntil(this._onDestroy))
      .subscribe((places) => {
        if (places) {
          this.isCities = true;
          this.processPlaceData(places, true);
        }
      });

    // Cities in a country subscription
    this.locationService.selectedCity
      .pipe(takeUntil(this._onDestroy))
      .subscribe((place) => {
        if (place) {
          this.selectedCity = place;
        }
      });
  }

  /**
   * Sets the initial value after the filteredCities are loaded initially
   */
  protected setInitialValue() {
    this.filteredCities
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredCities are loaded initially
        // and after the mat-option elements are available
      });
  }

  selectedTabValue(event: any) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName);
  }

  // Add Custom Place - Todo
  add(event: MatChipInputEvent): void {
    const value = event.value;
    if ((value || '').trim()) {
      const selectedPlace = this.places.find(
        (place) => place.name === value.trim()
      );
      if (selectedPlace) {
        this.selectedPlaces.push(selectedPlace);
      }
    }
    this.isRealPlaceChange = false;
    this.placeInput.nativeElement.value = '';
    this.placeCtrl.setValue(null);
  }

  remove(place: Place): void {
    const index = this.selectedPlaces.indexOf(place);
    if (place && place.type === 'city') {
      this.selectedCity = {
        name: '',
        type: 'city',
        coordinates: {
          lat: 0,
          lng: 0,
        },
        address: '',
      };
    }
    if (index >= 0) {
      this.selectedPlaces.splice(index, 1);
      if (this.selectedPlaces.length === 0 && this.selectedCity.name) {
        this.selectedPlaces = [this.selectedCity];
        this.filteredPlaces = of([]);
      } else if (this.selectedPlaces.length === 0 && !this.selectedCity.name) {
        this.locationService.getCitiesInCountry();
      }
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option) {
      let detail = event.option.value;
      let processedData: Place = {
        name: detail.name,
        address: detail.address,
        coordinates: {
          lat: detail.coordinates.lat,
          lng: detail.coordinates.lng,
        },
      };
      if (detail.type === 'city') {
        this.selectedCity = detail;
        this.locationService.getPlacesWithinCity(detail);
      } else if (this.selectedPlaces.length === 0 || !this.selectedCity.name) {
        this.initializePlacesSearch = false;
        this.locationService.getCityFromCoordinates(
          detail.coordinates.lat,
          detail.coordinates.lng,
          true
        );
      }
      this.setSelectedChips(processedData);
      this.isRealPlaceChange = false;
      this.placeInput.nativeElement.value = '';
      this.placeCtrl.setValue(null);
    }
  }

  setSelectedChips(processedData: any) {
    this.selectedPlaces = [processedData];
  }

  private processPlaceData(places: any[], isCities?: boolean) {
    // implement the error handling
    if (!places || places.length === 0) {
      // Todo
    }
    let formattedPlaces: Place[] = [];
    places.forEach((place) => {
      var processedData = {
        name: place.name,
        address: place.formatted_address,
        coordinates: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        // Add more properties as needed
      };
      formattedPlaces.push(processedData);
    });
    if (isCities) {
      formattedPlaces = formattedPlaces.map((place) => {
        place.type = 'city';
        return place;
      });
      this.isCities = true;
    }
    // You can add additional processing steps here
    // this.places = of(formattedPlaces);
    this.filteredPlaces = of(formattedPlaces);
  }

  validatePlace = () => {
    if (this.selectedPlaces.length === 0) {
      this.locationService.initializeApp();
    }
  };

  // Doctors and Hospitals
  getSearchOptionsData = (searchText: string) => {
    if (searchText) {
      let searchOptions: any = {
        searchText: searchText,
        place: this.selectedPlaces[0],
      };
      this.compositeSearchService
        .getSearchOptions(searchOptions)
        .subscribe((res) => {
          this.prepareSearchOptions(res);
        });
    }
  };

  displayFn(value: any) {
    return value ? value.name : undefined;
  }

  onOptionSelected = ($event: any): void => {
    console.log('Search Option Selected', $event.option.value);
    this.router.navigate(['/search-results'], {
      queryParams: $event.option.value,
    });
    // this.router.navigate(['/name/profile']);
  };

  private _filterStates(value: string): searchDropdownOptions[] {
    const filterValue = value.toLowerCase();

    return this.searchOptions.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }

  private prepareSearchOptions(searchResponse: any) {
    let groupedData: searchDropdownOptions[] = [];
    Object.keys(searchResponse).forEach((type: string) => {
      let option: searchDropdownOptions = {
        name: type,
        values: [],
      };
      let typeData = searchResponse[type];
      if (type === 'Doctors') {
        typeData.forEach((doctor: any) => {
          let value: Value = {
            type: type,
            id: doctor.DoctorID,
            name: doctor.DoctorName,
            specializationName: doctor.SpecializationName,
            specializationID: doctor.SpecializationID,
            hospitalName: doctor.HospitalName,
          };
          option.values.push(value);
        });
      } else if (type === 'Specializations') {
        typeData.forEach((specialization: any) => {
          let value: Value = {
            type: type,
            id: specialization.SpecializationID,
            name: specialization.SpecializationName,
          };
          option.values.push(value);
        });
      } else if (type === 'Hospitals') {
        typeData.forEach((hospital: any) => {
          let value: Value = {
            type: type,
            id: hospital.HospitalID,
            name: hospital.HospitalName,
          };
          option.values.push(value);
        });
      } else if (type === 'Diseases') {
        typeData.forEach((disease: any) => {
          let value: Value = {
            type: type,
            id: disease.DiseaseID,
            name: disease.Diseasedescription,
            specializationName: disease.SpecializationName,
            specializationID: disease.SpecializationID,
          };
          option.values.push(value);
        });
      }
      groupedData.push(option);
    });
    this.searchOptions = groupedData;
    this.filteredSearchOptions = of(this.searchOptions);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
