import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-boardmilitary',
  templateUrl: './boardmilitary.component.html',
  styleUrls: ['./boardmilitary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardmilitaryComponent implements OnInit {
    
  pointsCulture: number = 20;
  statusCulture: number = 15;

  constructor() { }

  ngOnInit() {
  }

}