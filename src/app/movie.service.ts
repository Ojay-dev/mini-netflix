import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }
  private movieUrl = 'api/movies'; // URL to web api(:base/:collection)

  /**
   * GET Movies from the Server
   */
  getMovies(): Observable<Movie[]> {
    console.log('Getting all movies from API');
    return this.http.get<Movie[]>(this.movieUrl)
      .pipe(
        tap(_ => console.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  /**
   * Get a single movie
   */
  getMovie(id: number): Observable<Movie> {
    console.log('Getting single movie');
    return this.http.get<Movie>(this.movieUrl + '/' + id)
      .pipe(
        catchError(this.handleError<Movie>('getMovie'))
      );
  }

  /**
   * Search for movies
   */
  searchMovies(searchQuery: string): Observable<Movie[]> {
    console.log('Searching for movies');
    if (!searchQuery.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(this.movieUrl + '/?Title=' + searchQuery)
    .pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  // Handle Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
