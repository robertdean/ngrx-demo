import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export abstract class HttpBaseService<T> {
  constructor(protected http: HttpClient, private url: string) {}
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map(result => {
        return result;
      }),
      catchError(this.handleError)
    );
  }

  getOne(id: number): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.http.get(url).pipe(
      map(result => result as T),
      catchError(this.handleError)
    );
  }
  addOne(payload: T): Observable<T> {
    return this.http
      .post<T>(this.url, payload, cudOptions)
      .pipe(catchError(this.handleError));
  }
  delete(id: number): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, cudOptions).pipe(
      map(result => result as T),
      catchError(this.handleError)
    );
  }
  search(term: string, propToSearchOn: string): Observable<T[]> {
    // NB: not a safe encoded search parameter
    const search = term ? '/?' + propToSearchOn + '=\\b' + term : '';
    return this.http.get(this.url + search).pipe(
      map(result => result as T[]),
      catchError(this.handleError)
    );
  }
  update(item: T): Observable<T> {
    return this.http.put(this.url, item, cudOptions).pipe(
      map(result => result as T),
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.log(error); // log to console instead
    return Observable.throw(error);
  }
}
