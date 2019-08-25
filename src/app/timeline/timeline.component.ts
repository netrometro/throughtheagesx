import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  cards = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  ngOnInit() {
  }

}