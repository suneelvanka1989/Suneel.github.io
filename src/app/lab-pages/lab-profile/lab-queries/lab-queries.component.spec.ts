import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabQueriesComponent } from './lab-queries.component';

describe('LabQueriesComponent', () => {
  let component: LabQueriesComponent;
  let fixture: ComponentFixture<LabQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabQueriesComponent]
    });
    fixture = TestBed.createComponent(LabQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
