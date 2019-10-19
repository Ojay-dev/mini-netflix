import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: ':id', component: MoviesDetailComponent },
];

@NgModule({
  declarations: [MoviesListComponent, MoviesDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesModule { }
