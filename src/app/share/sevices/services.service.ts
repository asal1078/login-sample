import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private _http: HttpClient
  ) { }

  get<T>(url: string , params: HttpParams = new HttpParams()){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this._http.get<T>(url , {
      headers,
      params
    }).pipe(
      catchError(error => {
      console.log(error);
      return Observable.arguments 
    }))
  }

  post<T>(url: string , data: any , params: HttpParams = new HttpParams()){
    const _data = JSON.stringify(data);
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this._http.post<T>(url , {
      headers,
      params
    }).pipe(
      catchError(error => {
      console.log(error);
      return Observable.arguments 
    }))
  }
}
