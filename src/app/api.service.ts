import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any>{
    return this.http.get(this.baseurl + '/klient/', 
    {headers: this.httpHeaders});
  }

  getAllPoradces(): Observable<any>{
    return this.http.get(this.baseurl + '/poradce/',
    {headers: this.httpHeaders});
  }

  getAllSmlouvy(): Observable<any>{
    return this.http.get(this.baseurl + '/smlouva/',
    {headers: this.httpHeaders});
  }

  getClient(id: number): Observable<any>{
    return this.http.get(this.baseurl + '/klient/' + id, 
    {headers: this.httpHeaders});
  }

  getPoradce(id: number): Observable<any>{
    return this.http.get(this.baseurl + '/poradce/' + id, 
    {headers: this.httpHeaders});
  }



}
