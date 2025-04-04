import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserProfile{
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getProfile() {
    return this.http.get<UserProfile>(`${this.apiUrl}users/me`, { headers: this.getHeaders() });
  }

  
}
