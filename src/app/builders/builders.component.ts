import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-builders',
  templateUrl: './builders.component.html',
  styleUrls: ['./builders.component.css']
})
export class BuildersComponent implements OnInit {
  @Input() military: string[];
  @Input() agriculture: string[];
  @Input() mining: string[];
  @Input() culture: string[];
  @Input() technology: string[];

  constructor() { }

  ngOnInit() {
    //let element = document.getElementById("builders");
    //element.scrollTop = element.scrollHeight;
  }

}