import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  // Handle Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
