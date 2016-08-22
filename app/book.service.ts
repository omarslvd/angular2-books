import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Book } from './book';
import { BOOKS } from './mockup-books';

@Injectable()
export class BookService {
    private booksByNameUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

    constructor(private http: Http) { }
    
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBooksByTitle(title: string): Observable<Book[]> {
        return this.http.get(this.booksByNameUrl + `${title}`)
            .map(response => this.mapBooks(response));
    }

    mapBooks(response: Response): Book[] {
        return response.json().items.map(response => this.toBook(response));
    }

    toBook(item: any): Book {
        let book = <Book>({
            isbn: item.volumeInfo.industryIdentifiers ? item.volumeInfo.industryIdentifiers[0].identifiers : '',
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            averageRating: item.volumeInfo.averageRating,
            ratingsCount: item.volumeInfo.ratingsCount,
            imageUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : '',
        });

        return book;
    }
}