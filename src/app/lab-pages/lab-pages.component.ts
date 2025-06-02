import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-lab-pages',
  templateUrl: './lab-pages.component.html',
  styleUrls: ['./lab-pages.component.scss']
})
export class LabPagesComponent {

  @ViewChild('matTabGroup', { static: false }) matTabGroup: MatTabGroup;

}
