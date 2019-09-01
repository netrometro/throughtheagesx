import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color;
  @Input() base64;
  image;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.base64!="") {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`${this.base64}`);
      this.image = this.image.changingThisBreaksApplicationSecurity;
    }
  }
}