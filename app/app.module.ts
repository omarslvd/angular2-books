import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list'

import { AppComponent }  from './app.component';
import { BookListComponent }  from './book-list.component';
import { BookSearchComponent }  from './book-search.component';

import { BookService } from './book.service';

import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    routes,
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookSearchComponent,
  ],
  providers: [
    BookService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
