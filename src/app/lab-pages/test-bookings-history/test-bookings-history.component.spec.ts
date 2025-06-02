import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBookingsHistoryComponent } from './test-bookings-history.component';

describe('TestBookingsHistoryComponent', () => {
  let component: TestBookingsHistoryComponent;
  let fixture: ComponentFixture<TestBookingsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBookingsHistoryComponent]
    });
    fixture = TestBed.createComponent(TestBookingsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
