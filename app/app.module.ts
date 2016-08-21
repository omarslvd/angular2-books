import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
