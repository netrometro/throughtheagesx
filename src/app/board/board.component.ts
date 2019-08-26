import { Component, OnInit } from '@angular/core';

import { cardA01Base64 } from '../assets/carda01.base64.const';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: string[] = [];

  constructor() {
    this.cards[0] = cardA01Base64;
  }

  ngOnInit() {
  }

}