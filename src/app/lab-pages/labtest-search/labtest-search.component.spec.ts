import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestSearchComponent } from './labtest-search.component';

describe('LabtestSearchComponent', () => {
  let component: LabtestSearchComponent;
  let fixture: ComponentFixture<LabtestSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabtestSearchComponent]
    });
    fixture = TestBed.createComponent(LabtestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
