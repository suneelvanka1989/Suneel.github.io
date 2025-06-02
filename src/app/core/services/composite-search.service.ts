import { Injectable } from '@angular/core';
import stateWideCities from '../../../assets/data/states_cities_in.json';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class compositeSearchService {
  url: string = '../../../assets/mock.json';

  constructor(private http: HttpClient) {

  }

  getSearchOptions(searchObject:any):Observable<any> {
    return this.http.get(this.url, searchObject);
  }

}
