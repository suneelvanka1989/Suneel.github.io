import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckupPackagesComponent } from './health-checkup-packages.component';

describe('HealthCheckupPackagesComponent', () => {
  let component: HealthCheckupPackagesComponent;
  let fixture: ComponentFixture<HealthCheckupPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthCheckupPackagesComponent]
    });
    fixture = TestBed.createComponent(HealthCheckupPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
