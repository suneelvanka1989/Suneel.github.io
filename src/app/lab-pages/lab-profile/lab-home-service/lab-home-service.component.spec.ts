import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabHomeServiceComponent } from './lab-home-service.component';

describe('LabHomeServiceComponent', () => {
  let component: LabHomeServiceComponent;
  let fixture: ComponentFixture<LabHomeServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabHomeServiceComponent]
    });
    fixture = TestBed.createComponent(LabHomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
