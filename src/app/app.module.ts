import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './cards/card/card.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, CardComponent, TimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
