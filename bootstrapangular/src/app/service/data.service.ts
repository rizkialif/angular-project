import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser() {
    return this.http.get('http://localhost/mysite/public/get/name')
  }
}
