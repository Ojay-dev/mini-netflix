import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  foundMovie: Observable<Movie[]>;
  private searchQuery = new Subject<string>();

  constructor(private movieService: MovieService) { }

  // Push a search term into the observable stream.
  search(query: string): void {
    this.searchQuery.next(query);
  }

  ngOnInit(): void {
    this.foundMovie = this.searchQuery.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((query: string) => this.movieService.searchMovies(query)),
    );
  }

}
