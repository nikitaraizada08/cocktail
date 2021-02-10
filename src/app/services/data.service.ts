
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    constructor(private http: HttpClient) {}

  /**
   * Get list of alcoholic drinks
   */
  getAlcoholicDrinks(): Observable<object> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .pipe(
      retry(1),
      catchError(this.handleError)
      );
  }

  /**
   * Get list of non alcoholic drinks
   */
  getNonAlcoholicDrinks(): Observable<object> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .pipe(
      retry(1),
      catchError(this.handleError)
      );
  }

  getDrinksFromTheFirstLetter(searchedString: string): Observable<any> {
    const opts = { f: searchedString };
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php`, {params: opts})
    .pipe(
        retry(1),
        catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error) {
        // client-side error
        errorMessage = `${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}
