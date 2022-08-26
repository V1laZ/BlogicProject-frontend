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

  addAdvisor(first_name: string, last_name: string, email: string, phone: string, PIN: string, age: number) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.post(this.baseurl + '/advisors/', {first_name, last_name, email, phone, PIN, age}, {headers: httpHeaders})
  }

  addClient(first_name: string, last_name: string, email: string, phone: string, PIN: string, age: number) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.post(this.baseurl + '/clients/', {first_name, last_name, email, phone, PIN, age}, {headers: httpHeaders})
  }

  addContract(reg_num: string, institution: string, client: number, manager: number, date_close: Date, date_valid: Date, date_end: Date) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.post(this.baseurl + '/contracts/', {reg_num, institution, client, manager, date_close, date_valid, date_end}, {headers: httpHeaders})
  }

}
