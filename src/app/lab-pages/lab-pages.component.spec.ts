import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPagesComponent } from './lab-pages.component';

describe('LabPagesComponent', () => {
  let component: LabPagesComponent;
  let fixture: ComponentFixture<LabPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabPagesComponent]
    });
    fixture = TestBed.createComponent(LabPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
