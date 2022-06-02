import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  Observable, of, throwError } from 'rxjs';

 import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = "http://localhost:8000/api/gerencia/clientes";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiURL);
  }

  searchClientes(term: string): Observable<Cliente[]> {
    if (!term.trim()) {
      return of([]);
    }
    let url = this.apiURL + '/' + term;
    console.log(url);
    return this.httpClient.get<Cliente[]>(url)
    .pipe(map(response => response));
  }
  // create(person): Observable<Person> {
  //   return this.httpClient.post<Person>(this.apiURL, JSON.stringify(person), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
 
  // find(id): Observable<Person> {
  //   return this.httpClient.get<Person>(this.apiURL + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
 
  // update(id, person): Observable<Person> {
  //   return this.httpClient.put<Person>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
 
  // delete(id){
  //   return this.httpClient.delete<Person>(this.apiURL + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
 
  // errorHandler(error) {
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }

}
