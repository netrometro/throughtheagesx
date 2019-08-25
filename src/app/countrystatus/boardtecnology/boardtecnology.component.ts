import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-boardtecnology',
  templateUrl: './boardtecnology.component.html',
  styleUrls: ['./boardtecnology.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardtecnologyComponent implements OnInit {
    
  pointsCulture: number = 20;
  statusCulture: number = 15;

  constructor() { }

  ngOnInit() {
  }

}