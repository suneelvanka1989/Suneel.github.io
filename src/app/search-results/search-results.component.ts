import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultService } from '../services/search-result.services';

interface Availability {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private searchResultAPIData = [];
  private results: any = [];
  public  filteredResult: any = [];
  public showMobileFilters: boolean = false;
  details: any;

  constructor(
    private router: Router,
    private searchResultService: SearchResultService
  ) { }

  ngOnInit() {
    this.showMobileFilters = false;
    this.getSearchResult('');
  }

  getSearchResult = (something: any) => {
    this.searchResultService.getSearchResults('').subscribe((result) => {
      this.searchResultAPIData = result;
      this.prepareResultData(result);
    });
  };

  prepareResultData = (apiData: any) => {
    this.results = [];
    Object.keys(apiData).forEach((type: string) => {
      let data = apiData[type];
      if (data && data.length > 0) {
        data.forEach((item: any) => {
          // Map the type here to differenciate UI based on this property
          item['type'] = type;
          this.results.push(item);
        });
      }
    });
    this.filterSearchResult();
  };


  // filters //
  filterData(value: any) {
    if (value == 1) {
      this.filteredResult = this.results.filter((item: any) => item.Fees < 50)
    } else if (value == 2) {
      this.filteredResult = this.results.filter((item: any) => item.Fees <= 200 && item.Fees >= 50)
    }
    else if (value == 3) {
      this.filteredResult = this.results.filter((item: any) => item.Fees <= 500 && item.Fees > 200)
    }
    else if (value == 4) {
      this.filteredResult = this.results.filter((item: any) => item.Fees > 500)
    }
  }

  // sortBy

  sortData(value: any) {
    if (value == "lowerFirst") {
      this.filteredResult = this.results.sort(function (x: any, y: any) {
        return x.Fees - y.Fees;
      });
    }else if(value = "highestFirst"){
      this.filteredResult = this.results.reverse(function(x: any, y:any){
        return x.Fees - y.Fees;
      })
    }else if(value = "byName"){
      this.filteredResult = this.results.sort();
    }
  }

  // filter
  filterOptions: string[] = ['cler all'];
  selectedFilter: string = '';

  clearFilterOptions() {
    // Clear the options by resetting the filterOptions array
    this.filterOptions = [];
    
    // Optionally, reset the selectedFilter as well
    this.selectedFilter = '';
  }




  filterSearchResult = () => {
    // Todo
    this.filteredResult = this.results;
    console.log(this.filteredResult);
  };

  bookAppointment($event: any) {
    this.router.navigate(['/book-appointment']);
  }

  navigateToProfile(details:any) {
    if(details && details.type ==='Hospitals'){
      this.router.navigate([`hospital/${details.HospitalName}/profile`]);

    }else{
      this.router.navigate([`doctor/${details.DoctorName}/profile`]);

    }
  }

  toggleResultFilter = ($event: Event) => {
    console.log("$event$event", $event);
    $event.preventDefault();
    $event.stopImmediatePropagation();
    this.showMobileFilters = !this.showMobileFilters;
  }


  ngOnDestroy() { }

  // checkbox

  gender: any;
  labelPosition: any;

  sortBy: any;

}
