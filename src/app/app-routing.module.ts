import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:imdbID', component: MoviesDetailComponent },
  { path: 'favourites', component: FavouriteMoviesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
