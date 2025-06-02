import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestSearchResultsComponent } from './labtest-search-results.component';

describe('LabtestSearchResultsComponent', () => {
  let component: LabtestSearchResultsComponent;
  let fixture: ComponentFixture<LabtestSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabtestSearchResultsComponent]
    });
    fixture = TestBed.createComponent(LabtestSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
