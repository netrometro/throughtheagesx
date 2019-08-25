import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-countrystatus',
  templateUrl: './countrystatus.component.html',
  styleUrls: ['./countrystatus.component.css']
})
export class CountrystatusComponent implements OnInit {
    
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
    ];
    this.activeItem = this.items[2];
  }
}