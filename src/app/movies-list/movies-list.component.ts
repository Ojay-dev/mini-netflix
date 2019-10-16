import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(
        (data: Movie[]) => this.movies = data,
        (err: any) => console.log(err),
        () => console.log('All done getting movies')
      );
  }

}
