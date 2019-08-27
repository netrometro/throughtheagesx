import { Component, ViewEncapsulation } from '@angular/core';

import { cardA01Base64 } from './assets/carda01.base64.const';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  
  military: string[] = [];
  agriculture: string[] = [];
  mining: string[] = [];
  culture: string[] = [];
  technology: string[] = [];

  constructor() {
    this.military[0] = cardA01Base64;
  }
}
