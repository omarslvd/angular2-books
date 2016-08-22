import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
    selector: 'book-search',
    templateUrl: 'app/book-search.component.html',
    styleUrls: [ 'app/book-search.component.css' ],
})
export class BookSearchComponent implements OnInit {
    books: Observable<Book[]>;
    private searchTitle = new Subject<string>();

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.books = this.searchTitle
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(title => title ? this.bookService.getBooksByTitle(title) : Observable.of<Book[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Book[]>([]);
            })
    }

    search(title: string) {
        this.searchTitle.next(title);
    }
}