import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBooksComponent } from './components/add-books/add-books.component';
import { BooksDetailComponent } from './components/books-detail/books-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-books'},
  { path: 'books-list', component: BooksListComponent},
  { path: 'add-books', component: AddBooksComponent},
  { path: 'edit-book/:id', component: BooksDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
