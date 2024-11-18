import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(`/getAll`).pipe(
      catchError((err) => this.handleError(err, 'fetching all boxes'))
    );
  }

  getById(id:number):Observable<any>{
    return this.http.get(`/getById/${id}`).pipe(
      catchError((err) => this.handleError(err, `fetching box with id ${id}`))
    );
  }

  remove(id:number):Observable<any> {
    return this.http.delete(`/remove/${id}`).pipe(
      catchError((err) => this.handleError(err, `removing box with id ${id}`))
    );
  }

  addBox(body:any):Observable<any>{
    return this.http.post(`/add`, body).pipe(
      catchError((err) => this.handleError(err, 'adding a new box'))
    );
  }

  private handleError(err: HttpErrorResponse, context: string): Observable<never> {
    console.error(`Error ${context}:`, err.message);
    return throwError(() => new Error(`Error ${context}: ${err.message}`));
  }

}
