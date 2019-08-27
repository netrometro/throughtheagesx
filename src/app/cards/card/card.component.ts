import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  display: boolean = false;

  @Input() base64;
  image;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(`${this.base64}`);
    this.image = this.image.changingThisBreaksApplicationSecurity;
  }

  showDialog() {
    this.display = true;
  }
}