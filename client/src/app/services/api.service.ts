import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}getAll`);
  }

  getById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}getById/${id}`);
  }

  remove(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}remove/${id}`);
  }

  addBox(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}add`, body);
  }

}
