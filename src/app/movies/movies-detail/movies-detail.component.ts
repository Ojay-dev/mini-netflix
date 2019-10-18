import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.movieService.getMovie(+params['id']).subscribe((movie: Movie) => {
        this.movie = movie;
      });
    });
  }

}
