import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
    selector: 'book-list',
    templateUrl: 'app/book-list.component.html',
    styleUrls: [ 'app/book-list.component.css' ],
})
export class BookListComponent implements OnInit {
    books: Book[];
    error: any;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks()
            .then(books => this.books = books)
            .catch(error => this.error = error);
    }
}