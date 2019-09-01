import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deckhorizontal',
  templateUrl: './deckhorizontal.component.html',
  styleUrls: ['./deckhorizontal.component.css']
})
export class DeckhorizontalComponent implements OnInit {

  @Input() cards: string[];
  colors: string[] = [];

  constructor() { 
    this.colors[0] = "green";
    this.colors[1] = "peru";
    this.colors[2] = "white";
    this.colors[3] = "yellow";
    this.colors[4] = "blue";
  }

  ngOnInit() {

  }

}