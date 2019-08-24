import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { CardComponent } from './cards/card/card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MenuplayersComponent } from './menuplayers/menuplayers.component';
import { CountrystatusComponent } from './countrystatus/countrystatus.component';
import { CubeComponent } from './cube/cube.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ButtonModule ],
  declarations: [ AppComponent, CardComponent, TimelineComponent, MenuplayersComponent, CountrystatusComponent, CubeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
