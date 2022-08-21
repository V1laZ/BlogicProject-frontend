import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/klient/', 
    {headers: httpHeaders});
  }

  getAllPoradces(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/poradce/',
    {headers: httpHeaders});
  }

  getAllSmlouvy(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/smlouva/',
    {headers: httpHeaders});
  }

  getClient(id: number): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/klient/' + id, 
    {headers: httpHeaders});
  }

  getPoradce(id: number): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    
    return this.http.get(this.baseurl + '/poradce/' + id, 
    {headers: httpHeaders});
  }



}
