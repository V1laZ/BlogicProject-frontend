import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiRoot = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  get_token(username: string, password: string) {
    return this.http.post(this.apiRoot + 'token/', {username, password})
  }
}
