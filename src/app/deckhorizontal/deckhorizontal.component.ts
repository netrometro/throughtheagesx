import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deckhorizontal',
  templateUrl: './deckhorizontal.component.html',
  styleUrls: ['./deckhorizontal.component.css']
})
export class DeckhorizontalComponent implements OnInit {

  @Input() cards: string[];

  constructor() { }

  ngOnInit() {
  }

}