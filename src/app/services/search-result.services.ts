import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  url: string = '../../assets/search-result.json';

  constructor(private http: HttpClient) {

  }

  getSearchResults(searchOption:Object):Observable<any> {
    return this.http.get(this.url);
  }

}
