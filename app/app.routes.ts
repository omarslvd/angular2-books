import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookSearchComponent } from './book-search.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/book/list',
        pathMatch: 'full'
    },
    {
        path: 'book/list',
        component: BookListComponent
    },
    {
        path: 'book/search',
        component: BookSearchComponent
    }
];

export const routes = RouterModule.forRoot(appRoutes);