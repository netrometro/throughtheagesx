import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-countrystatus',
  templateUrl: './countrystatus.component.html',
  styleUrls: ['./countrystatus.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountrystatusComponent implements OnInit {
    
  culture: number[];

  ngOnInit() {
    
  }
}