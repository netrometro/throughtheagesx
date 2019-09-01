import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  colors: string[] = [];

  constructor() {
    this.colors[0] = "green";
    this.colors[1] = "peru";
    this.colors[2] = "white";
    this.colors[3] = "blue";
    this.colors[4] = "yellow";
    this.colors[5] = "orange";
  }

  ngOnInit() {
  }

}