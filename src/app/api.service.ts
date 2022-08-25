import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/clients/', 
    {headers: httpHeaders});
  }

  getAllAdvisors(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/advisors/',
    {headers: httpHeaders});
  }

  getAllContracts(): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/contracts/',
    {headers: httpHeaders});
  }

  getClient(id: number): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    return this.http.get(this.baseurl + '/clients/' + id, 
    {headers: httpHeaders});
  }

  getAdvisor(id: number): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    
    return this.http.get(this.baseurl + '/advisors/' + id, 
    {headers: httpHeaders});
  }

}
