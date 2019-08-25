import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-boardculture',
  templateUrl: './boardculture.component.html',
  styleUrls: ['./boardculture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardcultureComponent implements OnInit {
    
  pointsCulture: number = 20;
  statusCulture: number = 15;

  constructor() { }

  ngOnInit() {
  }

}